# Contribution Guidelines

AwesomePerfCpp is a curated collection, so explain what a resource adds to the
existing material. Corrections to old entries are as welcome as new suggestions.

## Suggesting a resource

- Search the README, open issues, and pull requests for duplicates.
- Prefer the original author, conference, project, research institution, or vendor.
- Open and read the destination. Check the title, author, relevance, and any date
  you supply; a successful HTTP response alone is not enough.
- Explain the performance lesson: methodology, evidence, tradeoffs, or a tool's
  practical purpose. Avoid unsupported speedup claims and universal rankings.
- Keep each pull request focused on one resource or one coherent set of fixes.
- Use a short description ending with a period:

  ```markdown
  - [Resource title](RESOURCE_URL), Author (2024) - What readers will learn.
  ```

- Use a year only when the source confirms it. Distinguish publication dates from
  update dates; talk years refer to the conference, not the upload.
- Place articles in the most relevant topic group. Keep tools and sites roughly
  alphabetical within their groups, and talks grouped by conference year.
- Add a resource once; Getting Started may link to an essential entry again.
- No affiliate links, tracking parameters, advertisements, or promotional copy.
- Do not run scripts from a suggested resource just to verify the link.

## Correcting old links

- Prefer a verified new location for the same resource over a different resource.
- Preserve valuable historical material and label old environments or retired tools.
- Check redirected content: a product homepage or parked domain is not a repair.
- If the original is gone, try an archive snapshot and check its title and content.
- Treat DNS failures, timeouts, TLS errors, rate limits, and bot challenges as
  requiring review. Recheck before calling a link permanently broken.

## Editing and checking

Edit **README.md** for collection changes. **index.md** includes it directly for
GitHub Pages, so there is no second list to synchronize. Keep the existing main
section headings so established section links continue to work.

Use UTF-8, remove trailing whitespace, and keep descriptions concise. The Markdown
workflow checks formatting and local navigation on pull requests, and builds the
Jekyll site without deploying it. With Node.js 22 or newer, local checks are:

```sh
node scripts/check-docs.mjs
npx --yes markdownlint-cli2@0.17.2 README.md CONTRIBUTING.md index.md "docs/*.md" ".github/*.md"
```

The monthly/manual link workflow checks the current collection and contribution
guidelines. Its report is advisory and appears in the Actions run summary and
downloadable artifact. It neither comments on pull requests nor opens issues.
See [maintenance notes](docs/MAINTENANCE.md) for rechecking failures and exclusions.

By contributing, you agree that additions to the collection are covered by its
existing Creative Commons Attribution 4.0 International license.
