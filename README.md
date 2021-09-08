<!-- omit in toc -->
# Quick Seach app

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to give you the initial setup.

If you are not familiar with Create React App you can find an up to date guide [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

<!-- omit in toc -->
## TOC

- [Folder Structure](#folder-structure)
- [Install](#install)
- [Run application](#run-application)
- [Run tests](#run-tests)
- [Run storybook](#run-storybook)
- [Exercises](#exercises)
- [Notes](#notes)
- [Submitting your code](#submitting-your-code)

## Folder Structure

The initial project structure looks like this:

```
  .storybook/
  api/
    _search.get.json
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    components/
    App.js
    App.test.js
    index.css
    index.js
    serviceWorker.js
  .gitignore
  package.json
  README.md
  yarn.lock
```

## Install

To install project dependencies execute the following command:

```sh
yarn
```

## Run application

To run the application use the following command:

```sh
yarn start
```

This command will run two scripts concurrently:

1. `react-scripts start`
2. `canned -p 5000 ./api/\"`

The User Interface should be running on <http://localhost:3000/>

A dummy API endpoint should be available on the same port.

e.g.

```sh
curl -s http://localhost:3000/search
```

## Run tests

To run tests use the following command:

```sh
yarn test
```

## Run storybook

To run storybook use the following command:

```sh
yarn storybook
```
