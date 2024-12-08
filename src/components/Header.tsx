import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { Search, ShoppingBag, UserRound } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto">
      <div className="bg-[#0D0D0D] text-white flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold font-helvetica">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <Link className={`hover:text-[#FF9F0D]  ${inter.className}`} href="/">
            Home
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] text-[#FF9F0D] ${inter.className}`}
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${inter.className}`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${inter.className}`}
            href="/pages"
          >
            Pages
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${inter.className}`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${inter.className}`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`hover:text-[#FF9F0D] ${inter.className}`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search />
          <UserRound />
          <ShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
