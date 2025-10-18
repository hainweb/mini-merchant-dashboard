import React from "react";
import { removeToken } from "../../utils/auth";
import { removeUserEmail } from "../../utils/user";

const Header = ({ userEmail, onLogout }) => {
  const handleLogout = () => {
    removeToken();
    removeUserEmail();
    onLogout();
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <span className="text-sm">{userEmail}</span>
          </div>

          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-900 transition text-sm"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
