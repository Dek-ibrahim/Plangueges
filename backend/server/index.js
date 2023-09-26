// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import and use the customer routes
const customerRoutes = require('../routes/customerRoutes');
app.use('/api', customerRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
