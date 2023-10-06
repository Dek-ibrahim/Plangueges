// adminSupplies.js
const express = require('express');
const router = express.Router();
const SuppliesController = require('../controllers/supplierController');

// Define routes for admin supplies
router.get('/all', SupplierController.getAllSupplies);
router.post('/new', SupplierController.createSupply);
router.put('/update/:id', SupplierController.updateSupply);
router.delete('/delete/:id', SupplierController.deleteSupply);

module.exports = router;
