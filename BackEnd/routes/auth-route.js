import express from "express";

import signupSchema from "../validators/auth-validator.js";
import validate from "../middlewares/auth-middleware.js";
import { register, login } from "../controllers/auth-controllers.js";

var router = express.Router();
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

export default router;
