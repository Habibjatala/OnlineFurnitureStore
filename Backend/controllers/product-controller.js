import productModel from "../models/product-model.js";

export const AddNewProduct = async (req, res) => {
  try {
    const {
      productName,
      productFactory,
      productSku,
      productCas,
      countryOrigin,
      ingredientCode,
      productMaterial,
      productMethod,
      productOverview,
      productSolubility,
      productLife,
      chemicalFormula,
      molecularWeight,
    } = req.body;
    console.log("productFactory :", productFactory);

    const productImage = req.files["productImage"]
      ? {
          data: req.files["productImage"][0].buffer,
          contentType: req.files["productImage"][0].mimetype,
        }
      : null;

    console.log(" Image data is ", productImage);

    const existingProduct = await productModel.findOne({ productName });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Product with the same name already exists" });
    }
    const newProduct = new productModel({
      productName,
      productFactory,
      productImage,
      productSku,
      productCas,
      countryOrigin,
      ingredientCode,
      productMaterial,
      productMethod,
      productOverview,
      productSolubility,
      productLife,
      chemicalFormula,
      molecularWeight,
    });

    const saveProduct = await newProduct.save();

    return res.status(201).json({
      message: "Product addedd successfully",
      saveProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in the Adding New Product",
      err,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting product" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting products" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProductData = req.body;

    const productImage = req.files["productImage"]
      ? {
          data: req.files["productImage"][0].buffer,
          contentType: req.files["productImage"][0].mimetype,
        }
      : null;
    if (productImage) {
      updatedProductData.productImage = productImage;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting product" });
  }
};
