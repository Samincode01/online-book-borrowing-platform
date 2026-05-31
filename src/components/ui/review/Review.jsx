import React from 'react';

export default function Review() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      review:
        "Amazing collection of books and very fast delivery. I found exactly what I was looking for!",
    },
    {
      id: 2,
      name: "John Smith",
      review:
        "Book House has become my favorite online bookstore. Great prices and smooth ordering experience.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      review:
        "Loved the packaging and book quality. Highly recommended for book lovers.",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Readers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-base-100 shadow-md rounded-xl p-6"
            >
              <div className="text-yellow-500 text-xl mb-3">★★★★★</div>

              <p className="text-gray-600 mb-4">“{review.review}”</p>

              <h3 className="font-semibold">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}