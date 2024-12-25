"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggle() {
    setMenuOpen(!isMenuOpen);
  }

  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blogs" },
  ];

  return (
    <header className="bg-slate-900 z-50 text-white fixed top-0  left-0 right-0">
      <nav className="px-4 py-6 max-w-7xl mx-auto flex justify-between items-center  ">
        <Link className="text-white text-2xl font-bold" href={""}>
         Hygiene Blogs
        </Link>

        {/* Nav Items */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navLinks.map((path, i) => (
            <li key={i} className="text-white hover:text-orange-300">
              <Link href={path.path}>{path.link} </Link>
            </li>
          ))}
        </ul>
        <div className="text-white md:block hidden">
          <Link className="py-2 px-3 border border-gray-400 mx-2" href={"/"}>
            Signup
          </Link>
          <Link className="py-2 px-3 border border-gray-400 mx-2" href={"/"}>
            Login
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggle} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5 " />
            )}
          </button>
        </div>
      </nav>

      {/* "Menu icons for mobile" */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black  ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full  transition-all duration-150 ease-out"
              : "hidden"
          }`}
        >
          {navLinks.map((path, i) => (
            <li key={i} className="">
              <Link onClick={toggle} href={path.path}>
                {path.link}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;