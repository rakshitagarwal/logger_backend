const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const log_errorSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
  projectId: {
    type: Schema.Types.ObjectId,
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
});

module.exports = mongoose.model("log_error", log_errorSchema);
