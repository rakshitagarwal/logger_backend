const Sequelize = require("sequelize");
const db = require("../config/db");
const errorModel = require("./errorModel");
const Project = db.define("projects", {
  projectId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  projectName: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.STRING,
    reference: {
      model: "users",
      key: "userId",
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM,
    values: ["ACTIVE", "INACTIVE", "DELETED"],
  },
});

Project.hasMany(errorModel, { foreignKey: "projectId",targetKey:"projectId", onDelete: "CASCADE" });
errorModel.belongsTo(Project, { foreignKey: "projectId",targetKey:"projectId", onDelete: "CASCADE" });
module.exports = Project;
