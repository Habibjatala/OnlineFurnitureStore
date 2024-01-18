import express from "express";
import { isAdmin, requireSignIn } from "../middelwares/auhMiddelware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import formidable from "express-formidable";

// router object
const router = express.Router();

//routing

// CREATE CATEGORY || POST
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  formidable(),
  createCategoryController
);

// UPDATE CATEGORY || PUT
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateCategoryController
);

// GET ALL CATEGORY || GET
router.get("/categories", categoryController);

// GET SINGLE CATEGORY || GET
router.get("/single-category/:id", singleCategoryController);

// DELETE CATEGORY || DELETE
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
