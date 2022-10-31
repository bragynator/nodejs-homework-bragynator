const { BASE_URL } = process.env;

const createVerifyEmail = (verifyEmail, verificationToken) => {
  return {
    to: verifyEmail,
    subject: "Signup email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to confirm</a>`,
  };
};

module.exports = createVerifyEmail;
