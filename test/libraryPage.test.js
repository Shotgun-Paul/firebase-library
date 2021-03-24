{ describe, it, after, before } require('selenium-webdriver/testing');
var Page = require('../lib/libraries_page');
var page;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { Options } = require('selenium-webdriver/chrome');
var should = chai.should();
chai.use(chaiAsPromised);

// Here comes the Mocha

describe('Libraries page scenarios', function () {

    beforeEach(async function () {
        page = new Page();
        await page.driver.manage().window().maximize();
        page.visit('http://library-app.firebaseapp.com/libraries');
        await page.driver;
    });

    afterEach(async function () {
        // await page.driver.sleep(3000);
        await page.quit();
    });

    it('Should list libraries', async function () {
        this.timeout(10000);

        var libraries = await page.listLibraries();
        libraries.should.have.length.above(5);
    });

    it('Should be able to add a new library', async function () {
        this.timeout(10000);

        var addLibrary = await page.addLibrary();
        addLibrary.libraryList.should.contain(addLibrary.libraryName);
    });

    it('Should be able to filter libraries', async function () {
        this.timeout(10000);

        var libraries = await page.filterLibraries();
        libraries.libraryList.should.contain(libraries.newLibrary);
    });

});