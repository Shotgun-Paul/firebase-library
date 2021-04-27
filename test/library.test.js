{ describe, it, after, before } require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var page;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { Options } = require('selenium-webdriver/chrome');
var should = chai.should();
chai.use(chaiAsPromised);

// Here comes the Mocha

describe('Home page scenarios', function () {
    this.timeout(100000);

    this.beforeAll(async function (){ 
        page = new Page();
    })

    this.afterAll(async function (){
        // await page.driver.sleep(3000);
        await page.quit();
    })

    beforeEach(async function () {
        page.visit('http://library-app.firebaseapp.com');
        await page.driver;
    });

    afterEach(async function () {
        await page.driver.sleep(3000);
    });

    it('Email format check', async function () {
        var btn = await page.requestBtn();
        btn.opacity.should.equal('1');
        btn.state.should.be.true;
    });

    it('Getting fake Id', async function () {
        var alert = await page.alertSuccess();
        alert.should.contain("Thank you!");

        // ****If you need to use fake Id, use this:****

        // var regExpPattern = /-.*/g;
        // var fakeId = await alert.match(regExpPattern)[0];
        // console.log('Yor fake id is: ', fakeId);
    });

    it('Navbar elements check', async function () {
        var result = await page.navBarCheck();
        var expectedResult = ['Home', 'Libraries', 'Authors', 'Books', 'About', 'Contact', 'Admin'];
        JSON.stringify(result).should.equal(JSON.stringify(expectedResult));
    });

});