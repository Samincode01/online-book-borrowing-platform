"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();

  const { data: session, isPending } =
    authClient.useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
      return;
    }

    if (session?.user) {
      reset({
        name: session.user.name || "",
        email: session.user.email || "",
      });
    }
  }, [session, isPending, router, reset]);

  const handleUpdateProfile = async (data) => {
    const { error } =
      await authClient.updateUser({
        name: data.name,
      });

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully");

    router.push("/profile");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Update Profile
        </h2>

        <form
          onSubmit={handleSubmit(handleUpdateProfile)}
          className="space-y-4"
        >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Name
            </legend>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          {/* Email - read only */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Email
            </legend>
            <input
              type="email"
              readOnly
              className="input input-bordered w-full bg-gray-100"
              {...register("email")}
            />
          </fieldset>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}