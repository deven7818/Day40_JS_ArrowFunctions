/**
 *1. create a Address Book Contact with first and last names, address, city, state, zip, phone number and email...
 *2. ensure Valid Contacts are added . validate with regex
*/
"use-strict"
const ps = require("prompt-sync");
const prompt = ps();

var firstName = prompt("Enter your first Name:-" + "     ");
var fnameValidation = /^[A-Z][a-z]{2,}$/;
if (!fnameValidation.test(firstName)) {
    console.log("Plese enter valid firstName:-");
}
else {
    console.log("Entered Valid firstName");
}
var lastName = prompt("Enter your last Name:-" + "     ");
var lnameValidation = /^[A-Z][a-z]{2,}$/;
if (!lnameValidation.test(lastName)) {
    console.log("Plese enter valid lastName:-");
}
else {
    console.log("Entered Valid lastName");
}

var address = prompt("Enter your address Name:-" + "     ");
var addressValidation = /^[a-z]{4,}$/;
if (!addressValidation.test(address)) {
    console.log("Plese enter valid address:-");
}
else {
    console.log("Entered Valid address");
}
var city = prompt("Enter your city Name:-" + "     ");
var cityValidation = /^[a-z]{4,}$/;
if (!cityValidation.test(city)) {
    console.log("Plese enter valid city:-");
}
else {
    console.log("Entered Valid city");
}

var state = prompt("Enter your state Name:-" + "     ");
var stateValidation = /^[a-z]{4,}$/;
if (!stateValidation.test(state)) {
    console.log("Plese enter valid state:-");
}
else {
    console.log("Entered Valid state");
}
var zip = prompt("Enter your zip Name:-" + "     ");
var zipValidation = /^[0-9]{6}$/;
if (!zipValidation.test(zip)) {
    console.log("Plese enter valid zip Code:-");
}
else {
    console.log("Entered Valid zip code");
}
var phone = prompt("Enter your phone number Name:-" + "     ");
var phoneValidation = /^[0-9]{1,}\\s[0-9]{10}$/;
if (!phoneValidation.test(phone)) {
    console.log("Plese enter valid phone Number:-");
}
else {
    console.log("Entered Valid Phone Number");
}
var email = prompt("Enter your email Name:-" + "     ");
var emailValidation = /^[a-z0-9]+([_+-.][0-9a-z]+)*@[a-z]+.[a-z]{2,3}$/;
if (!emailValidation.test(email)) {
    console.log("Plese enter valid email:-");
}
else {
    console.log("Entered Valid email");
}
console.log("FirstName :" + firstName, +" LastName : " + lastName, " Address :" + address, "City :" + city, "State :" + state, "Zip :" + zip, "Phone number :" + phone, "Email :" + email)


