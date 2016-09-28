npm
=========

This is a personal study on the necessary steps to create, publish and consume a npm package. I am following [this nice tutorial](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738#.12iq9dolk) from [Joanne](https://medium.com/@jdaudier) at medium.com.  

This package exports Joanne's implementation of a function to add commas to numbers.

## Installation

  `npm install gerardolima-number-formatter`

## Usage

    var numFormatter = require('gerardolima-number-formatter');

    var formattedNum = numFormatter(35666);
  
  
  Output should be `35,666`


## Build
  Currenly this repository package only relies on npm scripts. 

  `npm run clean`
  
  `npm run build`

  Currenntly, these scripts need to run on **bash**, so that the [continuous integration](http://travis-ci.org) and the [coverage tests](http://coveralls.io/) run properly. To run them on windows, you need to create an evironment variable to inform **npm** to use bash, instead of the standard command interpreter ([more information here](http://stackoverflow.com/questions/35462422/force-node-to-use-git-bash-on-windows)).

  `export "comspec=C:\Program Files\Git\git-bash.exe"`

  I am intending to use Gulp to avoid these kind of system specifities.


## Tests

  `npm test`

## Code status 
[![Build Status](https://travis-ci.org/gerardolima/npm.svg?branch=master)](https://travis-ci.org/gerardolima/npm)
[![Coverage Status](https://coveralls.io/repos/github/gerardolima/npm/badge.svg?branch=master)](https://coveralls.io/github/gerardolima/npm?branch=master)
