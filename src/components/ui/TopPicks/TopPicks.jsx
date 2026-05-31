import books from "@/assets/book-list.json";
import BookCard from "@/components/ui/book-card/BookCard";
import Link from "next/link";

export default function TopPicks() {
  const topBooks = books.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Top Picks for You</h2>
          <p className="text-gray-500 mt-2">
            Discover our most loved books this week.
          </p>
        </div>

        <Link
          href="/books"
          className="btn btn-primary btn-sm"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}