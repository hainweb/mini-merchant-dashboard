const Product = require('../models/productModel');

const getStats = (req, res) => {
  const products = Product.findByUser(req.user.id);
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const categories = [...new Set(products.map(p => p.category))];
  const productsPerCategory = categories.map(cat => ({
    category: cat,
    count: products.filter(p => p.category === cat).length
  }));
  res.json({ totalProducts, totalValue, categories: categories.length, productsPerCategory });
};

module.exports = { getStats };
