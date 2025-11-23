const express = require('express');
const Company = require('../models/Company');
const router = express.Router();

// CREATE company
router.post('/', async (req, res) => {
  const company = await Company.create(req.body);
  res.json(company);
});

// GET all companies
router.get('/', async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

// UPDATE company
router.put('/:id', async (req, res) => {
  req.body.updateDate = new Date();
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE company
router.delete('/:id', async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: "Company Deleted" });
});

module.exports = router;
