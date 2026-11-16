
"use client"
import React from "react";
import Link from "next/link";
import Cartcount from "./Cartcount";
import { useCart } from "@/app/context/CartContext";

function Nav() {
  const { searchTerm, setsearchTerm } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/95 shadow-md backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-5">

          <Link
            href="/"
            className="shrink-0 text-3xl font-extrabold tracking-tight text-gray-900 no-underline transition duration-300 hover:scale-105"
          >
            Vaangi<span className="text-blue-600">kkoo</span>
          </Link>

          <input
            type="text"
            placeholder="🔍  Search products..."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            className="w-full max-w-xs rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2">

              <Link
                href="/"
                className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 no-underline transition duration-300 hover:bg-blue-100 hover:text-blue-700"
              >
                Home
              </Link>

              <Link
                href="/aboutUs"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                About Us
              </Link>

              <Link
                href="/contactus"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                Contact Us
              </Link>

              <Link
                href="/login"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/products"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                Products
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="ml-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-md shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
              >
                <span>🛒</span>
                Cart
                <Cartcount />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
