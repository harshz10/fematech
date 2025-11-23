const express = require('express');
const User = require('../models/User');
const Role = require('../models/Role');
const router = express.Router();

// CREATE USER
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user", details: error });
  }
});

// GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
      .populate('companyId')
      .populate('roleId');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users", details: error });
  }
});

// UPDATE USER (includes role change restriction)
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // CHECK IF ROLE CHANGE IS REQUESTED
    if (req.body.roleId && req.body.roleId !== String(user.roleId)) {

      const oldRole = await Role.findById(user.roleId);

      // If role is NOT editable -> block change
      if (oldRole && oldRole.isEditable === false) {
        return res.status(400).json({
          error: "This user's current role is not editable. Role cannot be changed."
        });
      }
    }

    req.body.updateDate = new Date();

    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);

  } catch (error) {
    res.status(500).json({ error: "Error updating user", details: error });
  }
});

// DELETE USER
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user", details: error });
  }
});

module.exports = router;
