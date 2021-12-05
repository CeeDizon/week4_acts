//Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401     6ASI
// August 19, 2021

const nodemailer = require("nodemailer");
const moment = require("moment");

// This function is for sending the email
function sendEmail(sender, password, receiver) {
  
  // for the sender/receiver's information.
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: sender, pass: password, },
  });


// contains the subject and content of the email to be sent and Moment API
  let mailDetails = {
    from: sender,
    to: receiver,
    subject: "Test Mail for 6ASI Node Mailer Activity",
    text: `This mail was sent by CS-401 Group 4. \n${moment().format("dddd, MMMM Do YYYY, h:mm:ss a"
    )} \nAquino, Bea Nichole T.\nDizon, Maycee G.\nQuizon, Megan Rae L.\n\n`,};
  

  // this is for the confirmation to verify if the email was sent or not
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("[ Error: Email was not sent ]");
    } 
    else {
      console.log("[ Success: Email was sent ]"); }
  });
}

module.exports = { sendEmail };
