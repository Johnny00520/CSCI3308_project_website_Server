const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driveSchema = new Schema({
  category: {type: String, lowercase: true},
  name: {type: String, lowercase: true},
  phone: String,
  information: String
});

const ModelClass = mongoose.model('drive', driveSchema);

module.exports = ModelClass;
