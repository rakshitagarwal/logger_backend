const express = require("express");
require("dotenv").config();
require("./config/db");

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const {invalidPathHandler,errorHandler} = require('./utils/errorHandler');
const { infoLogger, errorLogger } = require("./utils/logger");
const mainRoute = require("./routes");
const { ROUTE_PATH } = require("./utils/constants");


app.use(cors({
  origin: ["http://localhost:4000","https://f59d-180-211-111-66.in.ngrok.io","http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());
app.use(ROUTE_PATH.BASE, mainRoute);
app.use("*",invalidPathHandler);
app.use(errorHandler)


app.listen(port, () => {
  infoLogger.info({ message: "Server started on port " + port });
});

process
  .on("unhandledRejection", (error) => {
    throw error;
  })
  .on("uncaughtException", (error) => {
    errorLogger.error({ message: error });
});
