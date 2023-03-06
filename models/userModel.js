const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("users", {
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM,
    values: ["ACTIVE", "INACTIVE", "DELETED"],
  },
});

module.exports = User;
