const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { User } = require("../../models/user");
const { createVerifyEmail, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({
      message: "Email in use",
    });
  }
  const avatarURL = gravatar.url(email, { size: 250 }, false);
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = uuidv4();
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const emailData = createVerifyEmail(email, verificationToken);
  await sendEmail(emailData);

  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
      verificationToken: result.verificationToken,
    },
  });
};

module.exports = signup;
