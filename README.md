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


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Code status 
[![Build Status](https://travis-ci.org/gerardolima/npm.svg?branch=master)](https://travis-ci.org/gerardolima/npm)
[![Coverage Status](https://coveralls.io/repos/github/gerardolima/npm/badge.svg?branch=master)](https://coveralls.io/github/gerardolima/npm?branch=master)
