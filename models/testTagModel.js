const mongoose = require("mongoose");
const { DTO_OBJECT } = require("../utils/common");
const projectSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "DELETED"],
    default: "ACTIVE",
  },
},{ timestamps: true ,
  ...DTO_OBJECT
});
module.exports = mongoose.model("togs", projectSchema);
