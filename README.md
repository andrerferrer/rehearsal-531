## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone ggit@github.com:andrerferrer/rehearsal-531.git rehearsal
cd rehearsal
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```

Once a file has been updated in Sublime, you can run it with:

```bash
node lib/01_types.js
```
