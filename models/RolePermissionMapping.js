const mongoose = require('mongoose');

const RolePermissionMappingSchema = new mongoose.Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'PermissionRecord', required: true },
  updateDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

module.exports = mongoose.model('RolePermissionMapping', RolePermissionMappingSchema);
