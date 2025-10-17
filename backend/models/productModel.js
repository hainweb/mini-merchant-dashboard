const products = require('../data/products');

const findByUser = (userId) => products.filter(p => p.ownerId === userId);
const addProduct = (product) => { products.push(product); return product; };
const updateProduct = (id, userId, data) => {
  const product = products.find(p => p.id === id && p.ownerId === userId);
  if (!product) return null;
  Object.assign(product, data);
  return product;
};
const deleteProduct = (id, userId) => {
  const index = products.findIndex(p => p.id === id && p.ownerId === userId);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
};

module.exports = { findByUser, addProduct, updateProduct, deleteProduct };
