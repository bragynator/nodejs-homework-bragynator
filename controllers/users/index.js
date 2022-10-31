const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const changeSubscription = require("./changeSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const repeatVerification = require("./repeatVerification");

module.exports = {
  signup,
  login,
  logout,
  current,
  changeSubscription,
  updateAvatar,
  verify,
  repeatVerification,
};
