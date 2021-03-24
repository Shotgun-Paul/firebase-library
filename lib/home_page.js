var Page = require('./base_page');
var selector = require('../utils/locators');
var emailInput = selector.emailInput;
var requestInviteBtn = selector.requestInviteBtn;
var alertSuccess = selector.alertSuccess;
var navLink = selector.navLink;

Page.prototype.requestBtn = async function () { 
    await this.write(emailInput, this.fake().email);
    var requestButton = await this.find(requestInviteBtn); // kostyl
    
    return {
        opacity: await requestButton.getCssValue('opacity'),
        state: await requestButton.isEnabled()
    }
}

Page.prototype.clickSubmit = async function () {
    var requestButton = await this.find(requestInviteBtn); // kostyl
    return await requestButton.click();
}

Page.prototype.alertSuccess = async function () {
    await this.requestBtn();
    await this.clickSubmit();
    return (await this.driver.wait(until.elementLocated(By.css(alertSuccess)),5000)).getText();
}

Page.prototype.navBarCheck = async function () {
    return await this.findAll(navLink).then(function(elements){
        return Promise.all(elements.map(function(el){
            return el.getText();
        }));
    });
}

module.exports = Page;