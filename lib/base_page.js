const { assert } = require('console');
const { resolve } = require('path');
const webDriver = require('selenium-webdriver');
var fake = require('../utils/fake_data');

By = webDriver.By,
until = webDriver.until,
chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');

var Page = function () {
    this.driver = driver = new webDriver.Builder().forBrowser('chrome').build();
    var driver = this.driver;
    this.fake = fake;

    this.visit = function (theUrl) {
        return driver.get(theUrl);
    }

    this.quit = function () {
        return driver.quit();
    }

    this.find = async function (el) {
        await driver.wait(until.elementLocated(By.css(el)), 15000);
        return await driver.findElement(By.css(el));
    }

    // this.findLink = async function (el) {
    //     await driver.wait(until.elementLocated(By.linkText(el)), 15000);
    //     return driver.findElement(By.linkText(el));
    // }

    this.findAll = async function (el) {
        await driver.wait(until.elementLocated(By.css(el)), 15000);
        return await driver.findElements(By.css(el));
    }

    this.write = async function (el, txt) {
        await driver.wait(until.elementLocated(By.css(el)), 15000);
        return await driver.findElement(By.css(el)).sendKeys(txt);
    }
}

module.exports = Page;