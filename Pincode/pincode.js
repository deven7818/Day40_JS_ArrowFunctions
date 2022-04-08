"use-strict"
const ps = require("prompt-sync");
const prompt = ps();

let pinRegex = new RegExp("^[0-9]{6}$");
let pinCode = parseInt(prompt("Enter Pincode : "));

if(pinRegex.test(pinCode)){
        console.log("valid pincode");
}else{
    console.log("Please Enter valid pincode");
}