import React, { useState, useCallback } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import Card from "../components/common/Card";
import StatsCard from "../components/dashboard/StatsCard";
import CategoryBreakdown from "../components/dashboard/CategoryBreakdown";
import ProductsTable from "../components/products/Productstable";
import ProductForm from "../components/products/ProductForm";
import useProducts from "../hooks/useProducts";
import useStats from "../hooks/useStats";
import { getUserEmail } from "../utils/user";
import toast from "react-hot-toast";

const Dashboard = ({ onLogout }) => {
  const {
    products,
    loading: productsLoading,
    error: productsError,
    deleteProduct,
    refreshProducts,
  } = useProducts();
  const {
    stats,
    loading: statsLoading,
    error: statsError,
    refreshStats,
  } = useStats();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = useCallback(() => {
    setEditingProduct(null);
    setIsFormOpen(true);
  }, []);

  const handleEditProduct = useCallback((product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  }, []);

  const handleDeleteProduct = useCallback(
    async (id) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const result = await deleteProduct(id);
        if (result.success) {
          toast.success("Product deleted successfully");
          refreshStats();
        } else {
          alert(result.error);
        }
      }
    },
    [deleteProduct, refreshStats]
  );

  const handleFormClose = useCallback(
    (shouldRefresh) => {
      setIsFormOpen(false);
      setEditingProduct(null);
      if (shouldRefresh) {
        refreshProducts();
        refreshStats();
      }
    },
    [refreshProducts, refreshStats]
  );

  const formatValue = (value) => {
    if (value === undefined || value === null) return "0";
    return typeof value === "number" ? value.toLocaleString() : value;
  };

  return (
    <DashboardLayout userEmail={getUserEmail()} onLogout={onLogout}>
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Overview</h2>

        {!statsError && stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StatsCard
              label="PRODUCTS"
              value={formatValue(stats?.totalProducts)}
              loading={statsLoading}
            />
            <StatsCard
              label="TOTAL VALUE"
              value={`$${formatValue(stats?.totalValue?.toFixed(0))}`}
              loading={statsLoading}
            />
            <StatsCard
              label="CATEGORIES"
              value={formatValue(stats?.totalCategories)}
              loading={statsLoading}
            />
          </div>
        )}

        {statsLoading ? (
          <p>Loading category data...</p>
        ) : stats?.productsByCategory ? (
          <CategoryBreakdown
            categoryData={stats.productsByCategory}
            loading={statsLoading}
          />
        ) : (
          statsError && <p className="text-red-500">{statsError}</p>
        )}
      </Card>

      <Card>
        {productsLoading ? (
          <p>Loading products...</p>
        ) : products ? (
          <ProductsTable
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onAdd={handleAddProduct}
            loading={productsLoading}
          />
        ) : (
          productsError && <p className="text-red-500">{productsError}</p>
        )}
      </Card>

      <ProductForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        product={editingProduct}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
