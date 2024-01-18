import express from "express";
import {
  getOrdersController,
  getSingleOrderController,
  getSingleUserOrderController,
  getUserOrdersController,
} from "../controllers/orderController.js";
import {
  isAdmin,
  isUser,
  requireSignIn,
} from "../middelwares/auhMiddelware.js";

// router object
const router = express.Router();

// CREATE PRODUCT || POST

// GET ORDERS || GET
router.get("/get-orders", requireSignIn, isAdmin, getOrdersController);

// GET SINGLE ORDER || GET
router.get("/get-order/:id", requireSignIn, isAdmin, getSingleOrderController);

// GET SINGLE ORDER || GET
router.get("/get-user-order", requireSignIn, getUserOrdersController);

// GET SINGLE ORDER || GET
router.get(
  "/get-user-order/:id",
  requireSignIn,
  isUser,
  getSingleUserOrderController
);

// ----------------------------------------------------------------------------------------

export default router;
