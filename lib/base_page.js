const webDriver = require('selenium-webdriver');
                    By = webDriver.By,
                    until = webDriver.until,
                    chrome = require('selenium-webdriver/chrome');

let chromeOptions = new chrome.Options()
                    // .headless()
                    .addArguments("disable-infobars")
                    .addArguments("disable-extensions")
                    .excludeSwitches("enable-logging")
                    .addArguments("start-maximized");


var fake = require('../utils/fake_data');

var Page = function () {
    this.driver = driver = new webDriver.Builder().setChromeOptions(chromeOptions).forBrowser('chrome').build();
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