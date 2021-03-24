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
    var addNew =  await this.find(addLibraryButton);
    await addNew.click(); // why this works shitty?

    // ***Creation tab opened***
    await this.write(libraryName, fakeLibraryName);
    await this.write(LibraryAddress, fakeLibraryAddress);
    await this.write(libraryPhone, fakeLibraryPhone);
    var createButton = await this.find(createBtn);
    await createButton.click(); // and also this (-_-)
    var libraryListContainer = await this.find(libraryContainer);

    return{
        libraryList: await libraryListContainer.getText(), // and this (T_T)
        libraryName: fakeLibraryName
    }
}

// Filter libraries

Page.prototype.filterLibraries = async function () {
    var newLibrary = this.fake().libraryName;
    await this.addLibrary(newLibrary);
    await this.write(selector.inputFilter, newLibrary);
    var libraryListContainer = await this.find(libraryContainer);

    return{
        libraryList: await libraryListContainer.getText(), // and this (T_T)
        newLibrary: newLibrary  
    }
}

module.exports = Page;