const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  updateDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
