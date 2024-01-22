import express from "express";
import multer from "multer";
import {
  AddNewProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product-controller.js";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
  },
}).fields([{ name: "productImage", maxCount: 1 }]);

const router = express.Router();

//// ADD NEW PRODUCT
router.post("/addproduct", upload, AddNewProduct);

router.get("/getsingleproduct/:productId", getSingleProduct);

router.get("/getallproducts", getAllProducts);
router.put("/updateproduct/:productId", upload, updateProduct);
router.delete("/deleteproduct/:productId", deleteProduct);

export default router;
