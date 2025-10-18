const Product = require("../models/productModel");

const getStats = (req, res) => {
  const userProducts = Product.findByUser(req.user.id);

  const productsByCategory = userProducts.reduce((acc, product) => {
    const category = product.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = { count: 0, value: 0 };
    }
    acc[category].count += 1;
    acc[category].value += product.price * product.stock;
    return acc;
  }, {});

  const stats = {
    totalProducts: userProducts.length,
    totalCategories: Object.keys(productsByCategory).length,
    totalValue: userProducts.reduce((sum, p) => sum + p.price * p.stock, 0),
    totalStock: userProducts.reduce((sum, p) => sum + p.stock, 0),
    productsByCategory,
  };

  res.json(stats);
};

module.exports = { getStats };
