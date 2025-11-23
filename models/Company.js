const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String },
  phoneNumber: { type: String },
  creditsRemaining: { type: Number, default: 0 },
  expiryDate: { type: Date },
  createdDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

module.exports = mongoose.model('Company', CompanySchema);
