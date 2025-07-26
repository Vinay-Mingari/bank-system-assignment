
const express = require('express');
const app = express();
const loansRouter = require('./routes/loans');
const cors = require('cors');

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/loans', loansRouter);

// Health check route (optional)
app.get('/', (req, res) => {
  res.send('Loan API is running 🚀');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
