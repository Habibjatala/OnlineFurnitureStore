import express from "express";
import {
  AdminProfileUpdateController,
  adminSingleUserController,
  allUsersController,
  deleteUsersController,
  forgotPasswordController,
  loginController,
  profileUpdateController,
  registerController,
  singleUserController,
  testController,
} from "../controllers/authController.js";
import formidable from "express-formidable";
import {
  isAdmin,
  isUser,
  requireSignIn,
} from "../middelwares/auhMiddelware.js";

// router object
const router = express.Router();

//routing

// REGISTER || POST
router.post("/register", formidable(), registerController);

// LOGIN || POST
router.post("/login", loginController);

//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

// SINGLE || GET
router.get("/single-user", requireSignIn, singleUserController);

// SINGLE || GET
router.get(
  "/admin-single-user/:id",
  requireSignIn,
  isAdmin,
  adminSingleUserController
);

// SINGLE || GET
router.put(
  "/admin-update-user/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  AdminProfileUpdateController
);

//profile update
router.put("/profile", requireSignIn, formidable(), profileUpdateController);

//All Users
router.get("/get-all", requireSignIn, isAdmin, allUsersController);

//delete User
router.delete("/delete/:id", requireSignIn, isAdmin, deleteUsersController);

//protected route auth for user
router.get("/user-auth", requireSignIn, isUser, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth for admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
