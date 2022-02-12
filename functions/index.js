const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(functions.config().sendgrid.key);

const msg = {
  to: "souvik_bt18@iiitkalyani.ac.in", // Change to your recipient
  from: "sbis1999@gmail.com", // Change to your verified sender
  subject: "Welcome to your account",
  text: "This is your first email triggered by Cloud Functions",
};

exports.sendEmailToUser = functions.https.onCall((_, __) => {
  sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(`Unable to send email. Error: ${error}`);
        throw new functions.https.HttpsError("aborted", "Unable to send email");
      });

  return `Email sent successfully to ${msg.to}`;
});
