# REACT DESIGN SETUP (MONOREPO)

## About

This repo is kind of advanced, as it defined design system (Atomic design) and organize with Mono Repositories

## Techniques

This repo is using techniques:

- Mono repo design using lerna
- Storybook to view built react components
- Using husky to check react linting
- Using git convention commitizen with convention cz-conventional-changelog
- Using @commitlint/cli and @commitlint/config-conventional as git commit lint to check and use husky hook to check commit message before commit
- Github action CI/CD
- Chromatic: to run regressiontest with snapshot
- Deploy and hosting storybook in Netlify: http://leo97-monorepo.netlify.app

## DOWNLOAD

To download as dependencies:

- @leo.97/foundation
- @leo.97/react
- @leo.97/scss

## Forked and develop

To develop for more components in react, use node@16 as node-sass in this repo is compatible with node version.16
