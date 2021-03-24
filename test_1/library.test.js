const { assert } = require('console');
const { resolve } = require('path');
const webDriver = require('selenium-webdriver');
   { describe, it, after, before } require('selenium-webdriver/testing');
    By = webDriver.By,
    until = webDriver.until;
const { Options } = require('selenium-webdriver/chrome');

// Here comes the Mocha
describe('library app scenarios', function () {

    var driver;

    beforeEach(async function () {
        driver = new webDriver.Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();

        await driver;
    });

    afterEach(function () {
        driver.quit();
    });

    it('Button is active', async function () {

        let expectedResult = null;

        await driver.get('https://library-app.firebaseapp.com');

        await driver.findElement(By.css('input')).sendKeys('urgay@mail.ru');

        var result = await driver.findElement(By.css('div.col-md-2 > button')).then(function(btn){
            return btn.getAttribute('disabled').then(function(attrValue){
                return attrValue;
            });   
        });


        //expect(result.to.equal(expectedResult));





        /*
        var submitBtn = driver.findElement(By.css('div.col-md-2 > button'));
        
        driver.findElement(By.css('input')).sendKeys('urgay@mail.ru');

        await driver.wait(function(){
            return submitBtn.getCssValue('opacity').then(function (result) {
                console.log('Opacity is - ', result);
                return result === '1';
            });
        }, 5000);
        */
        
        // if (result !== expectedResult) {
        //   throw new Error(
        //     `Expected ${expectedResult}, but got ${result}`
        //   )
        // };
    });

    // it('Change Button opacity upon email filled', function () {
    //     var submitBtn = driver.findElement(By.css('div.col-md-2 > button')); 
    //     driver.findElement(By.css('input')).sendKeys('urgaymail.ru');

    //     driver.wait(function(){
    //         return submitBtn.getCssValue('opacity').then(function (result) {
    //             console.log(result);
    //             return result;
    //         });
    //     }, 5000);
    // });

    // it('alert success', function () {
    //     var submitBtn = driver.findElement(By.css('div.col-md-2 > button')); 
    //     driver.findElement(By.css('input')).sendKeys('urgay@mail.ru');
        
    //     driver.findElement(By.css('div.col-md-2 > button')).click();
    //     // this shit working
    //     driver.wait(webDriver.until.elementLocated(By.css('.alert-success'), 5000)).getText().then(function(txt){
    //         console.log(txt);
    //     });
    // });

    // it('works with mocha', function () {
    //     driver.findElements(By.css('nav li')).then(function(elements){
    //     elements.map(function(el){
    //         el.getText().then(function(txt){
    //             console.log("Navbar element text: ", txt);
    //         });
    //         });
    //     });
    // });
});

    
    // driver.sleep(10000);
    // driver.quit(); 