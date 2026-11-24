# Maintenance

## Content and website

Edit README.md. The GitHub Pages entry point, index.md, uses Jekyll's built-in
`include_relative` tag to render that file with the existing Cayman theme.
The project URL and the main section anchors stay the same. Reports and scripts
are excluded from the site; no custom plugins or build system are required.

The collection's CC BY 4.0 license is unchanged. Linked resources retain their own
licenses. Existing stylesheets and JavaScript have been left in place.

## Checks

Pull requests run local-link/navigation checks, Markdown validation, and an
official GitHub Pages Jekyll build. The build does not publish a site.
These checks do not request external resource pages.

External links are checked on the 15th of each month at 07:23 UTC, or manually
through **Actions → Advisory link report → Run workflow** on the default branch.
The report appears in the run summary and as the `link-report` artifact, retained
for 90 days. Individual link failures do not fail the workflow; installation or
infrastructure failures can still make the run fail. The workflow has read-only
repository permissions, does not create issues, and does not comment on PRs.

GitHub schedules run only from the default branch and may be delayed. GitHub can
disable schedules in inactive public repositories after 60 days: re-enable the
workflow in Actions if that happens. No scheduled check is active until these
files are pushed and integrated into the default branch.

Local checks, with Node.js 22 or newer:

```sh
node scripts/check-docs.mjs
npx --yes markdownlint-cli2@0.17.2 README.md CONTRIBUTING.md index.md "docs/*.md" ".github/*.md"
lychee --config lychee.toml --verbose --no-progress README.md CONTRIBUTING.md
```

Lychee is optional locally. No npm project or package lock is needed in this
repository. Workflow actions are pinned to verified commit SHAs; review and
update these pins occasionally. The local Markdown command uses the same
markdownlint-cli2 version bundled by the pinned Markdown action.

## Interpreting link reports

- A 404 or 410 is a strong failure signal. Recheck before editing the collection.
- Timeouts, DNS or TLS failures, 403 challenges, 429 rate limits, and server errors
  need a second check. Do not call them permanent failures or accept them as
  successful merely to make a report green.
- Open redirects and read the destination. A marketing landing page, parked
  domain, or unrelated content can return 200.
- For PDFs, check that the response contains a PDF, rather than an HTML shell.
- YouTube watch URLs are excluded from Lychee because missing videos can return
  200. Check playback or use YouTube's oEmbed endpoint and compare title/channel:

  ```text
  https://www.youtube.com/oembed?url=ENCODED_VIDEO_URL&format=json
  ```

- An oEmbed failure alone can also reflect restrictions; investigate before
  deleting a talk. It does not prove the video has been permanently removed.
- Archive replay can fail temporarily. Prefer a dated snapshot with checked
  content; the Wayback availability API alone does not validate the snapshot.

The only URL exclusion is documented in lychee.toml. Bot-blocked sites remain
visible in the advisory report. TLS verification is enabled. Private addresses
and email checks are disabled. The scheduled check targets the collection and
contribution guidelines rather than historical audit material.

## A small review routine

Skim the monthly report when convenient. Recheck repeated failures, fix moved
URLs, and review a few new suggestions. Once or twice a year, check that current
tools are still available and that historical labels remain accurate. A new
standard or fashionable library does not need an entry without a useful
performance lesson.

Automation references:

- [GitHub: events that trigger workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).
- [GitHub: disabling and enabling a workflow](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows).
- [Jekyll: includes relative to a source file](https://jekyllrb.com/docs/includes/#including-files-relative-to-another-file).
- [Lychee action](https://github.com/lycheeverse/lychee-action).
- [Markdownlint action](https://github.com/DavidAnson/markdownlint-cli2-action).
