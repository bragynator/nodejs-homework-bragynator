const express = require("express");

const { users: ctrl } = require("../../controllers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  signupUserSchema,
  loginUserSchema,
  changeSubscriptionUserSchema,
  repeatVerificationSchema,
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.get("/verify/:verificationToken", ctrl.verify);

router.post(
  "/verify",
  validateBody(repeatVerificationSchema),
  ctrl.repeatVerification
);

module.exports = router;
