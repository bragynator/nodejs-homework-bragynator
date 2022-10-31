const { User } = require("../../models/user");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  if (user.verify) {
    return res.status(400).json({
      message: "Verification has already been passed",
    });
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.json({
    message: "Verification successful",
  });
};

module.exports = verify;
