const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models/user");

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
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
    },
  });
};

module.exports = signup;
