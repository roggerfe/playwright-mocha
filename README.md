# Proof of Concept - Microsoft Playwright + mochaJS e2e tests

Microsoft playwright is a node library that automates browsers taskes, it relates to google puppeteer, but it aims to be cross browser compatible

The main use of the library is not as a web automation framework, but in this repository I showed how to integrate with `mocha` and `chai` in order to use as a `E2E Automation` library

## Scripts

There is 3 playwright scripts in this repository:


* `./playwright_ex_01.js` - Sample code from github that runs in 3 different browsers, goes to an URL and takes a screenshot

* ./playwright_ex_02.js - Script that goes to http://todomvc.com/examples/react/#/ and tries to add a new TO DO item, this script fails because it immediately tries to type in the input element, we need to wait the DOM loads the input element

* ./playwright_ex_03.js - Do the same as script `playwright_ex_02.js` but it is fixed so the script waits element to be rendered in the DOM

In order to execute any of the scripts, simply run:

* Linux or MAC OS
```
npm install
node ./playwright_ex_01.js 
```

* Windows
```
npm install
node .\playwright_ex_01.js 
```

## Tests

Tests were developed running in this TODO APP: http://todomvc.com/examples/react/#/ in the file: `test/todo.spec.js`

There are 2 test cases:
* Verify if the initial state of the app is an empty TO DO list
* Verify adding a new to do item, item must be appended in the list

In order to execute the tests, simply run:

```
npm install
```

```
npm test
```