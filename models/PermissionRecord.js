const mongoose = require('mongoose');

const PermissionRecordSchema = new mongoose.Schema({
  permissionName: { type: String, required: true },
  updateDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

module.exports = mongoose.model('PermissionRecord', PermissionRecordSchema);
