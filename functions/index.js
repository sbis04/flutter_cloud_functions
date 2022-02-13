const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(functions.config().sendgrid.key);

const msg = {
  to: "souvik_bt18@iiitkalyani.ac.in", // Change to your recipient
  from: "sbis1999@gmail.com", // Change to your verified sender
  subject: "Welcome to your account",
  text: "This is your first email triggered by Cloud Functions",
};

// HTTPS Function
exports.sendEmailToUserRequest = functions.https.onRequest((_, __) => {
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

// Callable Function
exports.sendEmailToUserCall = functions.https.onCall((_, __) => {
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

// Background Function - Authentication
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email; // Get email from authenticated user
  const displayName = user.displayName; // Get name from authenticated user

  const msg = {
    to: email,
    from: "welcome@company.com", // Change to your verified sender email
    subject: "Welcome to your account",
    text: `Hi ${displayName}, thanks for signing up!`,
  };

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
