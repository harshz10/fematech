const express = require('express');
const Role = require('../models/Role');
const router = express.Router();

// CREATE ROLE
router.post('/', async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Error creating role", details: error });
  }
});

// GET ROLES + NEW FILTER (isEditable)
router.get('/', async (req, res) => {
  try {
    const filter = {};

    // If filter passed -> /roles?isEditable=true
    if (req.query.isEditable !== undefined) {
      filter.isEditable = req.query.isEditable === "true";
    }

    const roles = await Role.find(filter);
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error fetching roles", details: error });
  }
});

// UPDATE ROLE
router.put('/:id', async (req, res) => {
  try {
    req.body.updateDate = new Date();
    const updated = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating role", details: error });
  }
});

// DELETE ROLE
router.delete('/:id', async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.json({ message: "Role Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting role", details: error });
  }
});

module.exports = router;
