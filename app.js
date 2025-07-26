
const express = require('express');
const app = express();
const loansRouter = require('./routes/loans');
const cors = require('cors');

app.use(cors()); 
app.use(express.json()); 

app.use('/loans', loansRouter);
app.get('/', (req, res) => {
  res.send('Loan API is running 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
