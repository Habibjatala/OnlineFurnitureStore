import dotenv from "dotenv";
import createError from "http-errors";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDb from "./utils/db.js";
import authRouter from "./routes/auth-route.js";
import contactRouter from "./routes/contact-route.js";
import productrouter from "./routes/product-route.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url); // Convert the URL to a file path
const __dirname = dirname(__filename); // Get the directory name

const corsOptions = {
  origin: "http://localhost:3000",
};
var app = express();
app.use(cors(corsOptions));
// app.use(morgan("dev"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT;
app.set("view engine", "ejs");
app.use("/api/auth/", authRouter);
app.use("/api/contact/", contactRouter);
app.use("/api/product", productrouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
connectDb();
app.listen(PORT, () => {
  console.log(`'listening on port'${PORT}`.bgCyan.red);
});
