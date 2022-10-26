const express = require("express");

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const {
  addContactSchema,
  updateStatusSchema,
} = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getOne);

router.post("/", validateBody(addContactSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteOne);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addContactSchema),
  ctrl.updateOne
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateStatusSchema, "Missing field favorite"),
  ctrl.updateStatusOne
);

module.exports = router;
