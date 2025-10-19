import React from "react";

const ProductRow = ({ product, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="py-4 px-4 text-gray-900">{product.name}</td>
      <td className="py-4 px-4 text-gray-900">${product.price.toFixed(2)}</td>
      <td className="py-4 px-4">
        <span className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md capitalize">
          {product.category}
        </span>
      </td>

      <td className="py-4 px-4 text-gray-600">{product.stock}</td>
      <td className="py-4 px-4 text-right">
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(product)}
            className="p-2 text-gray-400 hover:text-gray-600 transition"
            title="Edit"
            aria-label="Edit product"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="p-2 text-gray-400 hover:text-red-600 transition"
            title="Delete"
            aria-label="Delete product"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
