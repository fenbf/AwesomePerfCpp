// Dependency-free checks for this repository's inline Markdown links and headings.
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = async file => (await readFile(path.join(root, file), 'utf8')).replace(/\r\n/g, '\n');
const files = ['README.md', 'CONTRIBUTING.md', 'index.md'];
for (const dir of ['docs', '.github']) {
  for (const entry of await readdir(path.join(root, dir))) {
    if (entry.endsWith('.md')) files.push(`${dir}/${entry}`);
  }
}
const errors = [];
function anchors(source) {
  const seen = new Map();
  return new Set([...source.matchAll(/^#{1,6} +(.+)$/gm)].map(match => {
    const base = match[1].toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/ /g, '-');
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    return count ? `${base}-${count}` : base;
  }));
}
for (const file of files) {
  // Fenced examples are not navigable links or headings.
  const source = (await read(file)).replace(/^[ \t]*```[^\n]*\n[\s\S]*?^[ \t]*```[ \t]*$/gm, '');
  for (const match of source.matchAll(/\]\(([^\s)]+)\)/g)) {
    const target = match[1];
    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
    const [relative, fragment] = target.split('#');
    const destination = relative ? path.normalize(path.join(path.dirname(file), relative)) : file;
    try {
      if (!(await stat(path.join(root, destination))).isFile()) throw new Error('not a file');
      if (fragment && !anchors(await read(destination)).has(decodeURIComponent(fragment))) {
        errors.push(`${file}: missing anchor ${target}`);
      }
    } catch {
      errors.push(`${file}: missing local file ${target}`);
    }
  }
}
const readme = await read('README.md');
for (const heading of ['Talks', 'Articles', 'Sites/Blogs', 'Tools', 'Libraries', 'Books', 'About', 'License']) {
  if (!readme.includes(`## ${heading}\n`)) errors.push(`README.md: missing established heading ${heading}`);
}
const index = await read('index.md');
if (!/^---\nlayout: default\ntitle: AwesomePerfCpp\n---\n\s*{% include_relative README.md %}\s*$/.test(index)) {
  errors.push('index.md must render README.md through the standard Jekyll include_relative tag');
}
if (!readme.includes('https://creativecommons.org/licenses/by/4.0/')) errors.push('CC BY 4.0 license link missing');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked local links in ${files.length} Markdown files, established headings, license, and Pages source.`);
}
