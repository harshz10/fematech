const express = require('express');
const PermissionRecord = require('../models/PermissionRecord');
const router = express.Router();

// CREATE PermissionRecord
router.post('/', async (req, res) => {
  const record = await PermissionRecord.create(req.body);
  res.json(record);
});

// GET All PermissionRecords
router.get('/', async (req, res) => {
  const records = await PermissionRecord.find();
  res.json(records);
});

// UPDATE PermissionRecord
router.put('/:id', async (req, res) => {
  req.body.updateDate = new Date();
  const updated = await PermissionRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE PermissionRecord
router.delete('/:id', async (req, res) => {
  await PermissionRecord.findByIdAndDelete(req.params.id);
  res.json({ message: "PermissionRecord Deleted" });
});

module.exports = router;
