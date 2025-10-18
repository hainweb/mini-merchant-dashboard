import React from 'react';
import ProductRow from './ProductRow';
import Button from '../common/Button';

const ProductsTable = ({ products, onEdit, onDelete, onAdd, loading = false }) => {
  const tableHeaders = [
    { label: 'NAME', key: 'name' },
    { label: 'PRICE', key: 'price' },
    { label: 'CATEGORY', key: 'category' },
    { label: 'STOCK', key: 'stock' },
    { label: 'ACTIONS', key: 'actions', align: 'right' },
  ];

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Products</h2>
        <Button onClick={onAdd} variant="primary">
          Add Product
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {tableHeaders.map(header => (
                <th
                  key={header.key}
                  className={`py-4 px-4 text-sm font-medium text-gray-500 uppercase tracking-wide ${
                    header.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={tableHeaders.length} className="text-center py-12 text-gray-500">
                  No products found. Add your first product!
                </td>
              </tr>
            ) : (
              products.map(product => (
                <ProductRow
                  key={product.id}
                  product={product}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;