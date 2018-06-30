var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  companyname: {
    type: String,
    required: true
  },
  score: { type: Number }
});

module.exports = mongoose.model('company', CompanySchema);
