const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;

const errorLogger = createLogger({
  format: combine(
    label({ label: "error occured" }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log" }),
  ],
});

const infoLogger = createLogger({
  format: combine(label({ label: "Right now!" }), timestamp(), prettyPrint()),
  transports: [new transports.Console()],
});

module.exports = { infoLogger, errorLogger };
