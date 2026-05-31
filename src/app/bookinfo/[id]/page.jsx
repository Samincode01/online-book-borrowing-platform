"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import books from "@/assets/book-list.json";

export default function BookDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const book = books.find(
    (b) => b.id === parseInt(params.id)
  );

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={book.image_url}
          alt={book.title}
          className="rounded-xl w-full max-h-[500px] object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-3">
            {book.title}
          </h1>

          <p className="text-lg text-gray-500 mb-3">
            by {book.author}
          </p>

          <span className="badge badge-primary mb-5">
            {book.category}
          </span>

          <p className="leading-8 mb-6">
            {book.description}
          </p>

          <p className="font-semibold text-green-600 mb-6">
            Available Quantity: {book.available_quantity}
          </p>

          <button className="btn btn-primary">
            Borrow Book
          </button>
        </div>
      </div>
    </section>
  );
}