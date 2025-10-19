const Product = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "string" && value.trim() === "");

const getProducts = (req, res) => {
  const products = Product.findByUser(req.user.id);
  res.json(products);
};

const createProduct = (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    if ([name, price, category, stock].some(isEmpty)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(price) || price < 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }

    if (!Number.isInteger(stock) || stock < 0) {
      return res
        .status(400)
        .json({ message: "Stock must be a non-negative integer" });
    }

    const product = Product.addProduct({
      id: uuidv4(),
      ownerId: req.user.id,
      name: name.trim(),
      price: Number(price),
      category: category.trim().toLowerCase(),
      stock: Number(stock),
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateProduct = (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    if ([name, price, category, stock].some(isEmpty)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(price) || price < 0) {
      return res
        .status(400)
        .json({ message: "Price must be a positive number" });
    }

    if (!Number.isInteger(stock) || stock < 0) {
      return res
        .status(400)
        .json({ message: "Stock must be a non-negative integer" });
    }

    const updated = Product.updateProduct(req.params.id, req.user.id, {
      name: name.trim(),
      price: Number(price),
      category: category.trim().toLowerCase(),
      stock: Number(stock),
    });

    if (!updated) return res.status(404).json({ message: "Product not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteProduct = (req, res) => {
  try {
    const deleted = Product.deleteProduct(req.params.id, req.user.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
