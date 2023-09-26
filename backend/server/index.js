const express = require('express');
const app = express();
const adminSuppliesRouter = require('./routes/adminSupplies');

app.use(express.json());

// Use the admin supplies router
app.use('/admin/supplies', adminSuppliesRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
