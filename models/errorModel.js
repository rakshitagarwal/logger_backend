const mongoose = require("mongoose");
const {DTO_OBJECT}=require("../utils/common")
const log_errorSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  message: {
    type: String,
    required: true,
  },
  label: {
    type: String
  },
},
  {
    timestamps: true,
    ...DTO_OBJECT
  }
);


module.exports = mongoose.model("log_error", log_errorSchema);
