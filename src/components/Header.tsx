"use client";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="max-w-screen-xl mx-auto">
      <div className="bg-[#0D0D0D] text-white flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold font-helvetica">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            className={`${pathname === "/" ? "active" : ""}  ${
              inter.className
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/menu" ? "active" : ""
            } ${inter.className}`}
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/blog" ? "active" : ""
            } ${inter.className}`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/pages" ? "active" : ""
            } ${inter.className}`}
            href="/faq"
          >
            FAQs
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/about" ? "active" : ""
            } ${inter.className}`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/shop" ? "active" : ""
            } ${inter.className}`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/signup" ? "active" : ""
            } ${inter.className}`}
            href="/signup"
          >
            Sign Up
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search />
          <UserRound />
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/cart" ? "active" : ""
            } ${inter.className}`}
            href="/cart"
          >
            <ShoppingBag />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
