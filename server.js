const express = require('express');
const loanRoutes = require('./loanRoutes'); 
const app = express();
app.use('/loan', loanRoutes);
app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Hello Vinay, your Express server is alive!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
