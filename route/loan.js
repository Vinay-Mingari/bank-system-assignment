const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all loan applications
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM loan_applications');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch loans', details: err });
  }
});

// POST a new loan application
router.post('/', async (req, res) => {
  const { name, amount, credit_score } = req.body;

  if (!name || !amount || !credit_score) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO loan_applications (name, amount, credit_score) VALUES (?, ?, ?)',
      [name, amount, credit_score]
    );
    res.status(201).json({
      message: 'Loan application submitted',
      applicationId: result.insertId
    });
  } catch (err) {
    res.status(500).json({ error: 'Database insert failed', details: err });
  }
});
router.get('/:id', async (req, res) => {
  const loanId = req.params.id;
  try {
    const [result] = await db.query("SELECT * FROM loans WHERE id = ?", [loanId]);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  const { name, amount, tenure } = req.body;

  // Basic validation
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: "Invalid or missing 'name'" });
  }
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: "Invalid or missing 'amount'" });
  }
  if (!tenure || typeof tenure !== 'number' || tenure <= 0) {
    return res.status(400).json({ error: "Invalid or missing 'tenure'" });
  }

  try {
    // Continue with DB insert
    // Your existing insert logic here
    res.status(201).json({ message: "Loan created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Export router only after all routes are defined
module.exports = router;
