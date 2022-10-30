const express = require("express");

const { users: ctrl } = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const {
  signupUserSchema,
  loginUserSchema,
  changeSubscriptionUserSchema,
} = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(signupUserSchema), ctrl.signup);

router.post("/login", validateBody(loginUserSchema), ctrl.login);

router.get("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.current);

router.patch(
  "/",
  authenticate,
  validateBody(changeSubscriptionUserSchema),
  ctrl.changeSubscription
);

module.exports = router;