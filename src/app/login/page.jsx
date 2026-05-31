"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const HandleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
       if (error) {
      toast.error(error.message);
    }
    

    if (res) {
      toast.success("Logged in successfully!");

setTimeout(() => {
  router.push("/");
}, 3500);
    }
  };

  const HandleGoogleSignin = async() =>
  {
    const data = await authClient.signIn.social({
    provider: "google",
  })
  }
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Your Account
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(HandleLoginFunc)}
        >
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend mb-2">
              Email
            </legend>

            <input
              type="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email field is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
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
                {...register("password", {
                  required: "Password field is required",
                })}
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

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full btn-primary text-white mt-4">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500"
          >
            Register
          </Link>
        </p>
        <button
  type="button"
  className="btn btn-outline w-full flex items-center gap-3"
onClick={HandleGoogleSignin}>
  <FcGoogle size={22} />
  Sign in with Google
</button>
      </div>
    </div>
  );
};

export default LoginPage;