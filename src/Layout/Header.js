import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header({ cartCount }) {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Innova TechCart</div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-200">
          Home
        </a>
        <a href="#" className="hover:text-gray-200">
          Portátiles
        </a>
        <a href="#" className="hover:text-gray-200">
          Accesorios
        </a>
        <a href="#" className="hover:text-gray-200">
          Tablets
        </a>
      </nav>

      <div className="relative cursor-pointer">
        <FaShoppingCart className="h-6 w-6" />
      </div>
    </header>
  );
}

export default Header;
