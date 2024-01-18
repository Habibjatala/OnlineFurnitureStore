import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: { type: String, required: true },
  productFactory: { type: String, required: true },
  productImage: { data: Buffer, contentType: String },
  productSku: { type: String, required: true },
  productCas: { type: String, required: true },
  countryOrigin: { type: String, required: true },
  ingredientCode: { type: String, required: true },
  productMaterial: { type: String, required: true },
  productMethod: { type: String, required: true },

  productOverview: { type: String, required: true },
  productSolubility: { type: String, required: true },
  productLife: { type: String, required: true },
  chemicalFormula: { type: String, required: true },
  molecularWeight: { type: String, required: true },
});

export default model("Product", productSchema);
