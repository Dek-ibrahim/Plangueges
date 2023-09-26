// Import any necessary models or services for working with customers
// const Customer = require('../models/customer');

// Define controller functions
const customerController = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching customers.' });
    }
  },
  
  getCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found.' });
      }
      res.json(customer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the customer.' });
    }
  },

  createCustomer: async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the customer.' });
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found.' });
      }
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the customer.' });
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      const deletedCustomer = await Customer.findByIdAndRemove(req.params.id);
      if (!deletedCustomer) {
        return res.status(404).json({ error: 'Customer not found.' });
      }
      res.json({ message: 'Customer deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the customer.' });
    }
  },
};

module.exports = customerController;
