import express from "express";

import { contactForm } from "../controllers/contact-controller.js";
import contactSchema from "../validators/contact-validator.js";
import { validateContact } from "../middlewares/contact-middleware.js";

const router = express.Router();
router.route("/contact-us").post(validateContact(contactSchema), contactForm);

export default router;
