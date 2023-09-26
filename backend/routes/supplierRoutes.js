// adminSupplies.js
const express = require('express');
const router = express.Router();
const adminSuppliesController = require('../controllers/adminSuppliesController');

// Define routes for admin supplies
router.get('/', adminSuppliesController.getAllSupplies);
router.post('/', adminSuppliesController.createSupply);
router.put('/:id', adminSuppliesController.updateSupply);
router.delete('/:id', adminSuppliesController.deleteSupply);

module.exports = router;
