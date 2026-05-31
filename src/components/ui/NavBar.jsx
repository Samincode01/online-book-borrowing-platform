"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import toast from "react-hot-toast";
import bookLogo from "@/assets/book-logo.jpg";

export default function NavBar() {
  const { data: session } = authClient.useSession();
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
     toast.success("Logged out successfully");
  };

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
            <li>
              <Link href="/">
                <IoMdHome size={18} />
                Home
              </Link>
            </li>

            <li>
              <Link href="/books">
                <FaBook size={16} />
                All Books
              </Link>
            </li>

            <li>
              <Link href="/profile">
                <CgProfile size={18} />
                My Profile
              </Link>
            </li>
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
          <li>
            <Link
              href="/"
              className={`flex items-center gap-2 rounded-none px-3 pb-2 ${
                pathname === "/"
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <IoMdHome size={18} />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/books"
              className={`flex items-center gap-2 rounded-none px-3 pb-2 ${
                pathname === "/books"
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <FaBook size={16} />
              All Books
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={`flex items-center gap-2 rounded-none px-3 pb-2 ${
                pathname === "/profile"
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <CgProfile size={18} />
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {session ? (
          <>
            <span className="font-medium text-gray-700">
        Hi, {session.user.name?.split(" ")[0]}
      </span>
          <button
            onClick={handleLogout}
            className="btn btn-error text-white"
          >
            Logout
          </button>
          </>
         
        ) : (
          <>
            <Link href="/login" className="btn btn-outline">
              <MdLogin />
              Login
            </Link>

            <Link href="/register" className="btn btn-primary">
              <CiUser />
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}