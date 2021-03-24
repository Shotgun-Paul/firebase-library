const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder().forBrowser('chrome').build();
const By = webDriver.By;

// var requestWord = "Marduk"

(async function testRun() {
    await driver.get('https://google.com');
    const searchField = await driver.findElement(By.xpath('//input[@title="Поиск"]'));
    searchField.sendKeys('SELENIUM');
    await driver.sleep(1000);
    searchField.sendKeys(webDriver.Key.ENTER);
    await driver.sleep(3000);
    const results = await driver.findElements(By.xpath('//div[@class="g"]'));
    console.log('Search results Q = ', results.length);

    for(let element of results) {
        let text = await element.getText();
        console.log(text);
        console.log('------------------------');
    }

    (await driver).close();
})();