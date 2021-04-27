var Page = require('./base_page');
var selector = require('../utils/locators');
var libraryItem = selector.libraryItem;
var libraryName = selector.nameInput;
var LibraryAddress = selector.addressInput;
var libraryPhone = selector.phoneInput;
var createBtn = selector.createBtn;
var addLibraryButton = selector.addLibraryButton;
var libraryContainer = selector.libraryContainer;


// List libraries
Page.prototype.listLibraries = async function () {
    return await this.findAll(libraryItem);
}

// Add librariy
Page.prototype.addLibrary = async function (desiredName) {
    var fakeLibraryName;
    if (desiredName) {
        fakeLibraryName = desiredName;
    }else{
        fakeLibraryName = this.fake().libraryName;
    }

    var fakeLibraryAddress = this.fake().address;
    var fakeLibraryPhone = this.fake().phone;
    await this.find(addLibraryButton).then((el) => el.click());

    // ***Creation tab opened***
    await this.write(libraryName, fakeLibraryName);
    await this.write(LibraryAddress, fakeLibraryAddress);
    await this.write(libraryPhone, fakeLibraryPhone);
    await this.find(createBtn).then((el) => el.click());
    
    return{
        libraryList: await this.find(libraryContainer).then((el) => el.getText()), 
        libraryName: fakeLibraryName
    }
}

// Filter libraries

Page.prototype.filterLibraries = async function () {
    var newLibrary = this.fake().libraryName;
    await this.addLibrary(newLibrary);
    await this.write(selector.inputFilter, newLibrary);

    return{
        libraryList: await this.find(libraryContainer).then((el) => el.getText()),
        newLibrary: newLibrary  
    }
}

module.exports = Page;