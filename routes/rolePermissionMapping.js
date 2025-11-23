const express = require('express');
const RolePermissionMapping = require('../models/RolePermissionMapping');
const router = express.Router();

// CREATE Mapping
router.post('/', async (req, res) => {
  const mapping = await RolePermissionMapping.create(req.body);
  res.json(mapping);
});

// GET All Mappings
router.get('/', async (req, res) => {
  const mappings = await RolePermissionMapping.find()
    .populate('roleId')
    .populate('permissionId');
  res.json(mappings);
});

// UPDATE Mapping
router.put('/:id', async (req, res) => {
  req.body.updateDate = new Date();
  const updated = await RolePermissionMapping.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE Mapping
router.delete('/:id', async (req, res) => {
  await RolePermissionMapping.findByIdAndDelete(req.params.id);
  res.json({ message: "Mapping Deleted" });
});

module.exports = router;
