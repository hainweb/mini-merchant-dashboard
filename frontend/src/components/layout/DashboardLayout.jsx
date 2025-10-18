import React from "react";
import Header from "../dashboard/Header";

const DashboardLayout = ({ children, userEmail, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50">
        <Header userEmail={userEmail} onLogout={onLogout} />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8 pt-20">{children}</main>
    </div>
  );
};

export default DashboardLayout;
