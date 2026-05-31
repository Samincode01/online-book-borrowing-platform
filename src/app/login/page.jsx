"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Your Account
        </h1>

        <form className="space-y-4">
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend mb-2">
              Email
            </legend>

            <input
              type="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend mb-2">
              Password
            </legend>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Type your password"
                className="input input-bordered w-full pr-12"
              />

              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </span>
            </div>
          </fieldset>

          <button className="btn w-full bg-slate-800 hover:bg-slate-900 text-white mt-4">
            Login
          </button>
        </form>
         <p className="mt-4">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}