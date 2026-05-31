"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  const handleRegisterFunc = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } =
      await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });

    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }

    if (res) {
  toast.success("Signup successful! Redirecting to login...");
  await authClient.signOut();
setTimeout(() => {
  router.push("/login");
}, 1800);
}
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleRegisterFunc)}
        >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Name
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          {/* Photo URL */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Photo URL
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type photo URL"
              {...register("photo", {
                required:
                  "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">
                {errors.photo.message}
              </p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Email
            </legend>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type your email"
              {...register("email", {
                required:
                  "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Password
            </legend>

            <div className="relative">
              <input
                type={
                  isShowPassword
                    ? "text"
                    : "password"
                }
                className="input input-bordered w-full pr-12"
                placeholder="Type your password"
                {...register("password", {
                  required:
                    "Password field is required",
                })}
              />

              <span
                onClick={() =>
                  setIsShowPassword(
                    !isShowPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {isShowPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn btn-primary w-full text-white mt-4">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;