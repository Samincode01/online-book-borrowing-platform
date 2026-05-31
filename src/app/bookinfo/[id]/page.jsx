"use client";

import books from "@/assets/book-list.json";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function BookDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const { data: session, isPending } =
    authClient.useSession();

  const selectedBook = books.find(
    (b) => b.id === Number(params.id)
  );

  const [quantity, setQuantity] = useState(
    selectedBook?.available_quantity || 0
  );

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleBorrowBook = () => {
    if (quantity <= 0) {
      toast.error("Book not available");
      return;
    }

    setQuantity(quantity - 1);
    toast.success("Book borrowed successfully");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={selectedBook.image_url}
          alt={selectedBook.title}
          className="rounded-xl w-full max-h-[500px] object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-3">
            {selectedBook.title}
          </h1>

          <p className="text-lg text-gray-500 mb-3">
            by {selectedBook.author}
          </p>

          <span className="badge badge-primary mb-5">
            {selectedBook.category}
          </span>

          <p className="leading-8 mb-6">
            {selectedBook.description}
          </p>

          <p className="font-semibold text-green-600 mb-6">
            Available Quantity: {quantity}
          </p>

          <button
            onClick={handleBorrowBook}
            disabled={quantity === 0}
            className="btn btn-primary"
          >
            Borrow Book
          </button>
        </div>
      </div>
    </section>
  );
}