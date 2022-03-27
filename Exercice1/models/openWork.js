const mongoose = require("mongoose");
// import mongoose-unique-validator
const uniqueValidator = require("mongoose-unique-validator");

const openWorkSchema = mongoose.Schema({
  lever_id: { type: String, required: true},
  name: { type: String, required: true },
  department: { type: String, required: true },
  jobUrl: { type: String, required: true },
  contract: { type: String, required: true },
  team: { type: String, required: true },
  location: { type: String, required: true },
  publishedAt: { type: String, required: true },
}, { _id : false });


module.exports = mongoose.model("openWork", openWorkSchema);
