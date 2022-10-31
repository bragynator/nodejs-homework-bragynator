const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_VERIFIED_SENDER } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: SENDGRID_VERIFIED_SENDER };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
