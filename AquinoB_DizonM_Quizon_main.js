//Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401			6ASI
// August 19, 2021

var meyn = require("./AquinoB_DizonM_Quizon_functions.js");
const prompt = require("prompt-sync")();

// input Sender Email, Sender Password, Receiver Email
console.log("Please enter the following:");

var sMail = prompt("Sender Email : ");
var sPass = prompt("Sender Password : ");

var rMAil = prompt("Receiver Email : ");

// calling the function to send mail
meyn.sendEmail(sMail, sPass, rMAil);
