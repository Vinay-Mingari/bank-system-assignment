const express = require('express');
const router = express.Router();
const db = require('./db');


router.post('/apply', async (req, res) => {
  const { name, amount, creditScore } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO loan_applications (name, amount, credit_score) VALUES (?, ?, ?)',
      [name, amount, creditScore]
    );

    res.status(201).json({
      message: `Loan application for ${name} saved!`,
      applicationId: result.insertId,
      status: 'pending'
    });
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ error: 'Database error. Please try again.' });
  }
});
module.exports = router
