const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const db = require("./config/db");
const { invalidPathHandler } = require("./utils/helper");
const { infoLogger, errorLogger } = require("./utils/logger");
const mainRoute = require("./routes");
const { ROUTE_PATH } = require("./utils/constants");

db.authenticate().then(() => {
  infoLogger.info({ message: "Database connection established" });
});

app.use(cors());
app.use(express.json());
app.use(ROUTE_PATH.BASE, mainRoute);
app.use("*", invalidPathHandler);

db.sync().then(() => {
  app.listen(port, () => {
    infoLogger.info({ message: "Server started on port " + port });
  });
});

// mongoConnect(client => {
//   console.log("Connected");

// });

mongoose
  .connect(
    "mongodb+srv://rakshit:rakshit310@cluster0.qfsdpwi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Mongo DB Connected");

    // app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });

process
  .on("unhandledRejection", (error) => {
    throw error;
  })
  .on("uncaughtException", (error) => {
    errorLogger.error({ message: error });
  });
