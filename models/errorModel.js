const Sequelize = require("sequelize");
const db = require("../config/db");

const logError = db.define("log_error", {
  errorId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  level: {
    type: Sequelize.STRING,
  },
  label: {
    type: Sequelize.STRING,
  },
  projectId: {
    type: Sequelize.STRING,
    reference: {
      model: "projects",
      key: "projectId",
    },
  },
  message: {
    type: Sequelize.TEXT,
  },
});

module.exports = logError;
