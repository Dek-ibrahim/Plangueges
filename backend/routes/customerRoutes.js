// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the customer controller// Change this line to use CommonJS require syntax
const customerController = require('../controllers/customerController');


// Define routes for customers
router.get('all', customerController.getAllCustomers);
router.get('all/:id', customerController.getCustomerById);
router.post('new', customerController.createCustomer);
router.put('update/:id', customerController.updateCustomer);
router.delete('delete/:id', customerController.deleteCustomer);

module.exports = router;
