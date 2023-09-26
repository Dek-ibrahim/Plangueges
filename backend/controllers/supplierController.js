// adminSuppliesController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all supplies
async function getAllSupplies(req, res) {
  try {
    const supplies = await prisma.supply.findMany();
    res.json(supplies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Create a new supply
async function createSupply(req, res) {
  const { name, quantity } = req.body;
  try {
    const supply = await prisma.supply.create({
      data: {
        name,
        quantity,
      },
    });
    res.status(201).json(supply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Update a supply by ID
async function updateSupply(req, res) {
  const { id } = req.params;
  const { name, quantity } = req.body;
  try {
    const updatedSupply = await prisma.supply.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        quantity,
      },
    });
    res.json(updatedSupply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Delete a supply by ID
async function deleteSupply(req, res) {
  const { id } = req.params;
  try {
    await prisma.supply.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllSupplies,
  createSupply,
  updateSupply,
  deleteSupply,
};
