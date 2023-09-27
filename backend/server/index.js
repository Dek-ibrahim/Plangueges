// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import and use the customer routes
const customerRoutes = require('../routes/customerRoutes');
const userRoute = require('../routes/userRoute');
app.use('/api/customer', customerRoutes);
app.use('api/user', userRoute)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
