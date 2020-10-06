#!/usr/bin/env node
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * WARNING: this file should be able to run on node v6.16.0, which is used at SandCastle.
 * Please run `nvm use 6.16.0` before testing changes in this file!
 */

const path = require('path');
const fs = require('fs');
const cp = require('child_process');

const desktopRoot = path.resolve(__dirname, '..');
const root = path.resolve(desktopRoot, '..');
const staticDir = path.join(desktopRoot, 'static');
const staticFacebookDir = path.join(staticDir, 'facebook');

const version = JSON.parse(
  fs.readFileSync(path.join(desktopRoot, 'package.json'), 'utf8'),
).version;

const now = new Date();
const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
const newlineMarker = '__NEWLINE_MARKER__';
const fChangelog = path.resolve(staticDir, 'CHANGELOG.md');
const fChangelogFacebook = path.resolve(staticFacebookDir, 'CHANGELOG.md');

const lastCommit = cp
  .execSync(`hg log --limit 1 --template '{node}'`, {cwd: root})
  .toString();
const firstCommit = cp
  .execSync(
    `hg log --limit 1 --template '{node}' --keyword 'Flipper Release: v'`,
    {cwd: root},
  )
  .toString();

console.log(
  `Generating changelog for version ${version} based on ${firstCommit}..${lastCommit}`,
);

// # get all commit summaries since last release | find all changelog entries, but make sure there is only one line per commit by temporarily replacing newlines
const hgLogCommand = `hg log -r "${firstCommit}::${lastCommit} and file('glob:../../**/*')" --template "{phabdiff} - {sub('\n','${newlineMarker}', desc)}\n"`;
const hgLog = cp.execSync(hgLogCommand, {cwd: __dirname}).toString();

const diffRe = /^D\d+/;
const changeLogLineRe = /(^changelog:\s*?)(.*?)$/i;
const changeLogFacebookLineRe = /(^Facebook changelog:\s*?)(.*?)$/i;

let contents = `# ${version} (${date})\n\n`;
let contentsFacebook = `# ${version} (${date})\n\n`;
let changes = 0;

hgLog
  .split('\n')
  .filter(line => diffRe.test(line))
  .forEach(line => {
    // Grab the diff nr from every line in the output
    const diff = line.trim().match(diffRe)[0];
    // unfold the lines generated by hg log again
    line.split(newlineMarker).forEach(diffline => {
      // if a line starts with changelog:, grab the rest of the text and add it to the changelog
      const match = diffline.match(changeLogLineRe);
      const matchFacebook = diffline.match(changeLogFacebookLineRe);
      if (matchFacebook) {
        changes++;
        contentsFacebook += ` * [${diff}](https://github.com/facebook/flipper/search?q=${diff}&type=Commits) - ${matchFacebook[2]}\n`;
      } else if (match) {
        changes++;
        contents += ` * [${diff}](https://github.com/facebook/flipper/search?q=${diff}&type=Commits) - ${match[2]}\n`;
        contentsFacebook += ` * [${diff}](https://github.com/facebook/flipper/search?q=${diff}&type=Commits) - ${match[2]}\n`;
      }
    });
  });

if (!changes) {
  console.log('No diffs with changelog items found in this release');
} else {
  contents += '\n\n' + fs.readFileSync(fChangelog, 'utf8');
  contentsFacebook += '\n\n' + fs.readFileSync(fChangelogFacebook, 'utf8');
  fs.writeFileSync(fChangelog, contents);
  fs.writeFileSync(fChangelogFacebook, contentsFacebook);
}