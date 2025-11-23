const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  roleName: { type: String, required: true },

  isEditable: { type: Boolean, default: true },

  updateDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

module.exports = mongoose.model('Role', RoleSchema);
