"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { FaBookOpen, FaRegBookmark } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import userImage from "@/assets/user.png";
export default function ProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session === null) {
      router.push("/login");
    }
  }, [session, router]);

  if (session === undefined) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-base-100 rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-b pb-8">
          <Image src={userImage} alt="user-image"
             width={120}
  height={120}/>
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {session.user.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {session.user.email}
            </p>

            <span className="badge badge-primary mt-4">
              Premium Reader
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-base-200 rounded-xl p-6 text-center">
            <FaBookOpen
              className="mx-auto text-primary mb-3"
              size={28}
            />
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-gray-500">
              Total Borrowed Books
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 text-center">
            <FaRegBookmark
              className="mx-auto text-primary mb-3"
              size={28}
            />
            <h3 className="text-2xl font-bold">3</h3>
            <p className="text-gray-500">
              Currently Reading
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 text-center">
            <MdCategory
              className="mx-auto text-primary mb-3"
              size={28}
            />
            <h3 className="text-2xl font-bold">
              Science
            </h3>
            <p className="text-gray-500">
              Favorite Category
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 bg-base-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            Membership Details
          </h2>

          <p>
            Member Since:{" "}
            <span className="font-medium">
              January 2025
            </span>
          </p>

          <p className="mt-2">
            Status:{" "}
            <span className="text-success font-medium">
              Active
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}