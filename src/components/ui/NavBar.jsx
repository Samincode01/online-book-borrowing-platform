"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdLogin } from "react-icons/md";

import bookLogo from "@/assets/book-logo.jpg";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: <IoMdHome size={18} />,
    },
    {
      href: "/books",
      label: "All Books",
      icon: <FaBook size={16} />,
    },
    {
      href: "/profile",
      label: "My Profile",
      icon: <CgProfile size={18} />,
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost flex items-center gap-3 px-2">
          <Image
            src={bookLogo}
            alt="Book House Logo"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-primary">
            Book House
          </span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 rounded-none px-3 pb-2 transition ${
                    isActive
                      ? "text-primary border-b-2 border-primary font-semibold"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        <Link href="/login" className="btn btn-outline">
          <MdLogin />
          Login
        </Link>

        <Link href="/register" className="btn btn-primary">
          <CiUser />
          Register
        </Link>
      </div>
    </div>
  );
}