import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import CategoryBar from "./CategoryBar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CategoryBreakdown = ({ categoryData, loading = false }) => {
  const [viewMode, setViewMode] = useState("bars");

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!categoryData || Object.keys(categoryData).length === 0) {
    return (
      <p className="text-gray-500 text-center py-8">
        No category data available
      </p>
    );
  }

  const maxValue = Math.max(
    ...Object.values(categoryData).map((cat) => cat.value)
  );

  const chartData = {
    labels: Object.keys(categoryData).map(
      (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
    ),
    datasets: [
      {
        label: "Products per Category",
        data: Object.values(categoryData).map((cat) => cat.count),
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(239, 68, 68, 0.8)",
        ],
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Category Breakdown
        </h3>

        <button
          onClick={() => setViewMode(viewMode === "bars" ? "chart" : "bars")}
          className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span>
            {viewMode === "bars" ? "Show Chart View" : "Show Bar View"}
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>

      {viewMode === "bars" ? (
        <div className="space-y-6">
          {Object.entries(categoryData).map(([category, data]) => (
            <CategoryBar
              key={category}
              category={category}
              value={data.value}
              count={data.count}
              percentage={(data.value / maxValue) * 100}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-4">
          <div style={{ maxWidth: "600px", width: "100%" }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `${context.label}: ${context.parsed.y} products`;
                      },
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: { display: true, text: "Number of Products" },
                  },
                  x: {
                    title: { display: true, text: "Category" },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBreakdown;
