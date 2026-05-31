import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure className="px-6 pt-6">
        <Image
          src={book.image_url}
          alt={book.title}
          width={220}
          height={300}
          className="rounded-lg h-72 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-lg">{book.title}</h2>

          <span className="badge badge-primary">
            {book.category}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          by {book.author}
        </p>

        <p className="text-sm text-gray-600 line-clamp-3">
          {book.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-green-600">
            Available: {book.available_quantity}
          </span>

          <Link
  href={`/bookinfo/${book.id}`}
  className="btn btn-primary btn-sm mt-4"
>
View Details
</Link>
        </div>
      </div>
    </div>
  );
}