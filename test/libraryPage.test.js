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
    this.timeout(100000);

    this.beforeAll(async function (){ 
        page = new Page();
    })

    this.afterAll(async function (){
        // await page.driver.sleep(3000);
        await page.quit();
    })

    beforeEach(async function () {
        page.visit('https://library-app.firebaseapp.com/libraries');
        await page.driver;
    });

    afterEach(async function () {
        await page.driver.sleep(3000);
    });

    it('Should list libraries', async function () {
        var libraries = await page.listLibraries();
        libraries.should.have.length.above(5);
    });

    it('Should be able to add a new library', async function () {
        var addLibrary = await page.addLibrary();
        addLibrary.libraryList.should.contain(addLibrary.libraryName);
    });

    it('Should be able to filter libraries', async function () {
        var libraries = await page.filterLibraries();
        libraries.libraryList.should.contain(libraries.newLibrary);
    });

});