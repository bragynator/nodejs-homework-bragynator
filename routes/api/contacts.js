const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const {
  addContactSchema,
  updateStatusSchema,
} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getOne);

router.post("/", authenticate, validateBody(addContactSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteOne);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addContactSchema),
  ctrl.updateOne
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusSchema),
  ctrl.updateStatusOne
);

module.exports = router;
