import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdLogin } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/books">All Books</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">
          Book House
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/"><IoMdHome />Home</Link>
          </li>
          <li>
            <Link href={"/books"}><FaBook />All Books</Link>
          </li>
          <li>
            <Link href="/profile"><CgProfile />My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-1.5">
        <Link href="/login" className="btn">
          <MdLogin />Login
        </Link>

        <Link href="/register" className="btn btn-primary">
          <CiUser />Register
        </Link>
      </div>
    </div>
  );
}