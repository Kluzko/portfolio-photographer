const express = require("express");
const { config } = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//  Load env vars
config({ path: "./config/config.env" });

//  Connect to mongo database
connectDB();

//  Route files
const albums = require("./routes/albums");
const images = require("./routes/images");
const email = require("./routes/email");
const auth = require("./routes/auth");

const app = express();
//  body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  cors
app.use(cors());

//  etag disable
// app.disable("etag");

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount routers
app.use("/api/v1/albums", albums);
app.use("/api/v1/images", images);
app.use("/sendMail", email);
app.use("/api/v1/auth", auth);

// custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT} on mode: ${process.env.NODE_ENV}`.blue.bold
  );
});

// Handle unhandled promise rejcetions
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});
