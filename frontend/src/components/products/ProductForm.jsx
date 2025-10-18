import React, { useState, useEffect } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import { productsAPI } from "../../services/api";

const ProductForm = ({ isOpen, onClose, product = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        stock: product.stock,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
      });
    }
    setErrors({});
    setApiError("");
  }, [product, isOpen]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = "Stock must be 0 or greater";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      const productData = {
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        category: formData.category.trim(),
        stock: parseInt(formData.stock),
      };

      if (product) {
        await productsAPI.update(product.id, productData);
      } else {
        await productsAPI.create(productData);
      }

      onClose(true);
    } catch (err) {
      setApiError(err.response?.data?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose(false)}
      title={product ? "Edit Product" : "Add New Product"}
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="e.g., T-Shirt"
        />

        <Input
          label="Price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          error={errors.price}
          required
          placeholder="0.00"
        />

        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          error={errors.category}
          required
          placeholder="e.g., Clothing"
        />

        <Input
          label="Stock Quantity"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          error={errors.stock}
          required
          placeholder="0"
        />

        {apiError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {apiError}
          </div>
        )}

        <div className="flex space-x-4 pt-4">
          <Button
            type="button"
            onClick={() => onClose(false)}
            variant="secondary"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="flex-1"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductForm;
