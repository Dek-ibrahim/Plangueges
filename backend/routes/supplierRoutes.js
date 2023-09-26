// adminSupplies.js
const express = require('express');
const router = express.Router();
const adminSuppliesController = require('../controllers/adminSuppliesController');

// Define routes for admin supplies
router.get('all', SuppliesController.getAllSupplies);
router.post('new', SuppliesController.createSupply);
router.put('update/:id', SuppliesController.updateSupply);
router.delete('delete/:id', SuppliesController.deleteSupply);

module.exports = router;
