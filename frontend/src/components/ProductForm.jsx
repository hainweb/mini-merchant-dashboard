import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, productToEdit, onCancel }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setCategory(productToEdit.category);
      setStock(productToEdit.stock);
    } else {
      setName('');
      setPrice('');
      setCategory('');
      setStock('');
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: productToEdit?.id, name, price: Number(price), category, stock: Number(stock) });
  };

  return (
    <div className="product-form">
      <h3>{productToEdit ? 'Edit Product' : 'Add Product'}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
        <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} required />
        <button type="submit">{productToEdit ? 'Update' : 'Add'}</button>
        {productToEdit && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default ProductForm;
