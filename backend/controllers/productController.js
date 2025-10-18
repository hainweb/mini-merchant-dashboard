const Product = require('../models/productModel');
const { v4: uuidv4 } = require('uuid');

const getProducts = (req, res) => {
  res.json(Product.findByUser(req.user.id));
};

const createProduct = (req, res) => {
  const { name, price, category, stock } = req.body;
  const product = Product.addProduct({ id: uuidv4(), ownerId: req.user.id, name, price, category, stock });
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const updated = Product.updateProduct(req.params.id, req.user.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

const deleteProduct = (req, res) => {
  const deleted = Product.deleteProduct(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted' });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
