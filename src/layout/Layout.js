import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

export default function Layout() {
  return (
    <div className="space-y-5">
      <Header />
      <Outlet />
      <Footer />
      {/* outlet ~ route con của route cha */}
    </div>
  );
}
