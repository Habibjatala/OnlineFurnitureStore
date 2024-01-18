//import { text } from "express";
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const contactSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
export default model("contact", contactSchema);
