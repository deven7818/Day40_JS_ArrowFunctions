//Class

"use-strict"
const ps = require("prompt-sync");
const prompt = ps();

class Contact {
    firstName
    lastName
    address
    state
    city
    zip
    email
    phoneNumber

    //Constructor
    constructor(firstName, lastName, address, state, city, zip, email, phoneNumber) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zip = zip
        this.email = email
        this.phoneNumber = phoneNumber
    }
}

// Array
var addressBook = new Array();

/**
 * creating function contactDetails by passing parameters
 * @param {*} firstName - firstName
 * @param {*} lastName  - lastName
 * @param {*} address   - address
 * @param {*} city      - city
 * @param {*} state     - state
 * @param {*} zip   - zipCode
 * @param {*} phoneNumber -phoneNumber
 * @param {*} email     - email
 
 */
function contactDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {

    //Ability to check Duplicate Contact
    addressBook.filter(contact => contact.firstName == firstName)
        .reduce(() => count++, count = 0);
    if (count > 0) {
        console.log("Contact With Name " + firstName + " Already Present")
    } else {
        var firstName = prompt("Enter your first Name:-" + "     ");
        var fnameValidation = /^[A-Z][a-z]{2,}$/;
        if (!fnameValidation.test(firstName)) {
            console.log("Invalid...Plese enter valid firstName:-");
        }
        else {
            console.log("Entered Valid firstName");
        }
        var lastName = prompt("Enter your last Name:-" + "     ");
        var lnameValidation = /^[A-Z][a-z]{2,}$/;
        if (!lnameValidation.test(lastName)) {
            console.log("Invalid...Plese enter valid lastName:-");
        }
        else {
            console.log("Entered Valid lastName");
        }

        var address = prompt("Enter your address Name:-" + "     ");
        var addressValidation = /^[a-z]{4,}$/;
        if (!addressValidation.test(address)) {
            console.log("Invalid...Plese enter valid address:-");
        }
        else {
            console.log("Entered Valid address");
        }
        var city = prompt("Enter your city Name:-" + "     ");
        var cityValidation = /^[a-z]{4,}$/;
        if (!cityValidation.test(city)) {
            console.log("Invalid...Plese enter valid city:-");
        }
        else {
            console.log("Entered Valid city");
        }

        var state = prompt("Enter your state Name:-" + "     ");
        var stateValidation = /^[a-z]{4,}$/;
        if (!stateValidation.test(state)) {
            console.log("Invalid...Plese enter valid state:-");
        }
        else {
            console.log("Entered Valid state");
        }
        var zip = prompt("Enter your zip Name:-" + "     ");
        var zipValidation = /^[0-9]{6}$/;
        if (!zipValidation.test(zip)) {
            console.log("Invalid...Plese enter valid zip Code:-");
        }
        else {
            console.log("Entered Valid zip code");
        }
        var phone = prompt("Enter your phone number Name:-" + "     ");
        var phoneValidation = /^[0-9]{1,}\\s[0-9]{10}$/;
        if (!phoneValidation.test(phone)) {
            console.log("Invalid...Plese enter valid phone Number:-");
        }
        else {
            console.log("Entered Valid Phone Number");
        }
        var email = prompt("Enter your email Name:-" + "     ");
        var emailValidation = /^[a-z0-9]+([_+-.][0-9a-z]+)*@[a-z]+.[a-z]{2,3}$/;
        if (!emailValidation.test(email)) {
            console.log("Invalid...Plese enter valid email:-");
        }
        else {
            console.log("Entered Valid email");
        }
        let newContact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        console.log("Contact Added Successfully");

        addressBook.push(newContact);
    }
}

/**
 * Edit contact in address book
 * @param {*} findName 
 * @param {*} editedVariable 
 * @param {*} newValue 
 */
function editContact(findName, editedVariable, newValue) {
    if (addressBook.length == null) {
        console.log("Add Contact In Address Book");
    } else {
        addressBook.forEach(newContact => {
            if (newContact.firstName == findName) {
                switch (editedVariable) {
                    case "firstName":
                        newContact.firstName = newValue;
                        break;
                    case "lastName":
                        newContact.lastName = newValue;
                        break;
                    case "address":
                        newContact.address = newValue;
                        break;
                    case "state":
                        newContact.state = newValue;
                        break;
                    case "city":
                        newContact.city = newValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = newValue;
                        break;
                    case "firstName":
                        newContact.firstName = newValue;
                        break;
                    case "lastName":
                        newContact.lastName = newValue;
                        break;
                }
            }
        })
    }
}
function selectFunction(select) {
    switch (select) {
        case "contactDetails":
            // Calling Contact Details Fucntion
            contactDetails("Deven", "Mali", "OmNagar", "Dhule", "Maharastra", "424005", "9405828376", "deven@gmail.com");
            break;
        case "editContact":
            //Calling Edit Contact Function
            editContact("Devendra", "city", "Pune");
            console.log(addressBook);
            break;
    }
}

selectFunction("contactDetails");
selectFunction("editContact");