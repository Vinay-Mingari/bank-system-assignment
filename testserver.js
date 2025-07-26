// test-server.js
const express = require('express');
const app = express();

console.log('Server file loaded');

app.get('/', (req, res) => {
  res.send('Test server is running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
