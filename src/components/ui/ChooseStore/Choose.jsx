import React from 'react';

export default function Choose() {
  const features = [
  {
    title: "Wide Book Collection",
    description:
      "Browse a wide range of Story, Tech, and Science books—from classics to modern favorites.",
    icon: "📚",
  },
  {
    title: "Easy Borrowing",
    description:
      "Borrow your favorite books online in just a few clicks anytime, anywhere.",
    icon: "🔖",
  },
  {
    title: "Available Anytime",
    description:
      "Check book availability instantly and find your next read whenever you want.",
    icon: "⏰",
  },
  {
    title: "Loved by Readers",
    description:
      "Join a growing community of readers discovering and borrowing books every day.",
    icon: "⭐",
  },
];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          We make book shopping easy, affordable, and enjoyable for every reader.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}