import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db";

// Load env vars
config({ path: "./config/config.env" });

// Connect to mongo database
connectDB();

// Route files
import albums from "./routes/albums";

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount routers
app.use("/api/v1/albums", albums);

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
