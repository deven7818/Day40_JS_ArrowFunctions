//create a Address Book Contact with first and last names, address, city, state, zip, phone number and email...

"use-strict"
const ps = require("prompt-sync");
const prompt = ps();

var firstName = prompt("Enter your first Name:-"+"     ");
var lastName = prompt("Enter your last Name:-"+"     ");
var address = prompt("Enter your address Name:-"+"     ");
var city = prompt("Enter your city Name:-"+"     ");
var state = prompt("Enter your state Name:-"+"     ");
var zip = prompt("Enter your zip Name:-"+"     ");
var phone = prompt("Enter your phone number Name:-"+"     ");
var email = prompt("Enter your email Name:-"+"     ");

console.log("FirstName :"+firstName,+" LastName : "+lastName," Address :"+ address,"City :"+city,"State :"+state,"Zip :"+zip,"Phone number :"+phone,"Email :"+email)


