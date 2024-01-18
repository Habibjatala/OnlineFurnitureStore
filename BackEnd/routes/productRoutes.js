import express from "express";
import formidable from "express-formidable";
import {
  createProductController,
  getProductController,
  productsCheckoutsession,
  stripeWebhookController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middelwares/auhMiddelware.js";

// router object
const router = express.Router();

// CREATE PRODUCT || POST
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// GET PRODUCT || GET
router.get("/get-products", getProductController);

router.post(
  "/create-checkout-session",
  requireSignIn,
  formidable(),
  productsCheckoutsession
);

router.post(
  "/stripe-webhook",
  express.json({ type: "application/json" }),
  async (req, res) => {
    stripeWebhookController(req, res);
  }
);
// ----------------------------------------------------------------------------------------

export default router;
