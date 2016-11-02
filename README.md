 ts-app
=========

This is a personal study on the necessary steps to develop an Angular application using TypeScript. This repository is built uppon work previously done on my other repository to develop a [Npm](https://github.com/gerardolima/npm) package.  

## Status

The fisrt goal of this repository is to create the minimum scaffolding to the application, including the build process to compile TypeScript and run unit tests. 

## Installation

  `npm install gerardolima-ts-app`

## Usage

    var myApp = require('gerardolima-ts-app');

    var myName = myApp.name;
  
  
  Output should be `ts-app`


## Build
  Currenly this repository package only relies on npm scripts. 

  `npm run clean`
  
  `npm run build`

  Currenntly, these scripts need to run on **bash**, so that the [continuous integration](http://travis-ci.org) and the [coverage tests](http://coveralls.io/) run properly. To run them on windows, you need to create an evironment variable to inform **npm** to use bash, instead of the standard command interpreter ([more information here](http://stackoverflow.com/questions/35462422/force-node-to-use-git-bash-on-windows)).

  `export "comspec=C:\Program Files\Git\git-bash.exe"`


## Tests

  `npm test`

## Code status 
[![Build Status](https://travis-ci.org/gerardolima/ts-app.svg?branch=master)](https://travis-ci.org/gerardolima/ts-app)
[![Coverage Status](https://coveralls.io/repos/github/gerardolima/ts-app/badge.svg?branch=master)](https://coveralls.io/github/gerardolima/ts-app?branch=master)
