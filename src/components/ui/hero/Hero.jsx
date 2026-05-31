import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-base-200">
      <div className="hero min-h-[80vh] max-w-7xl mx-auto px-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Bookshelf"
            className="max-w-md w-full rounded-2xl shadow-2xl object-cover"
          />

          {/* Text */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Discover Your Next
              <span className="block text-primary">Favorite Book</span>
            </h1>

            <p className="py-6 text-base-content/70 max-w-lg">
              Explore thousands of books from Story, Tech, and Science.
              From timeless classics to modern knowledge—find the perfect
              book delivered to your fingertips.
            </p>

            <div className="flex gap-4">
             <Link href={"/books"}>
              <button className="btn btn-primary">
                Browse Now
              </button>
             </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}