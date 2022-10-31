const { User } = require("../../models/user");
const { createVerifyEmail, sendEmail } = require("../../helpers");

const repeatVerification = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Email was not found" });
  }
  if (user.verify) {
    return res.status(400).json({
      message: "Verification has already been passed",
    });
  }

  const emailData = createVerifyEmail(email, user.verificationToken);
  await sendEmail(emailData);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = repeatVerification;
