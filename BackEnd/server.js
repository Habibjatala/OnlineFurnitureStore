import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
//import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import payPalPaymentRoutes from "./routes/payPalPaymentRoutes.js";
import Klarna from "./routes/KlarnaRoutes.js";
import productrouter from "./routes/product-route.js";
//env config
dotenv.config();

//mongo db connection
connectDb();

// rest object
const app = express();

// CORS Configuration
const corsOptions = {
  origin: ["", "http://localhost:3003"],
  optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) may require this
};

//middelwares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

//auth routes
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/category", categoryRoutes);
//app.use("/api/v1/product", productRoutes);
app.use("/api/v1/products", productrouter);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/payment", payPalPaymentRoutes);
app.use("/api/v1/payment", Klarna);

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

//rest api
app.get("/", (req, res) => {
  res.send({ message: " Welcome to node js - Schrankdesign" });
});

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(
    colors.bgCyan.white(
      `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`
    )
  );
  console.log("Client id is ", PAYPAL_CLIENT_ID);
  console.log("Secret  id is ", PAYPAL_CLIENT_SECRET);
});
