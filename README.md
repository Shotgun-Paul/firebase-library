# # Firebase-library tests

This repository is a personal project for studying Selenium.
It contains a set of tests for the resource http://library-app.firebaseapp.com
I left the node.js modules files in the repository for the convenience of running a local copy of the tests. I also disabled the .headless() option and added a pause of three seconds after each test, for clarity.

### Modules used:
- selenium-webdriver
- mocha
- mochawesome
- faker
- chai
- chai-as-promised

### Commands to run tests
Running tests in sequential mode:
``` sh
npm run test
```
Running tests in parallel mode with the mochawesome reporter
```sh
npm run awesome
```
