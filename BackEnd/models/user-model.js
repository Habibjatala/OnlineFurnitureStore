import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { Schema, model } = mongoose;
const userSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
  },
  haveASite: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
  },
  streetAddress1: {
    type: String,
    required: true,
  },
  streetAddress2: {
    type: String,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  hearAboutUs: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  jobTitle: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    console.log("Hash Pass error", error);
  }
});
userSchema.methods.genToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("Token Error", error);
  }
};
export default model("user", userSchema);
