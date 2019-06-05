# Metro Function Shadow Issue Reproduction

Run `yarn test` to produce a compiled/minified bundle with the issue present.

Run `yarn bundle-test` to produce a bundle without compliation/minification with the issue present. This makes it a little easier to see what was removed.

`test-out.js` is the output target of both scripts, the built version is included in source for reference.
