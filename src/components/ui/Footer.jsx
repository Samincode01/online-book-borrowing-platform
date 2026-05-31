export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2z" />
              </svg>

              <h2 className="text-2xl font-bold">Book House</h2>
            </div>

            <p className="text-slate-400 text-sm mt-3">
              Discover your next favorite book from our Story, Tech, and Science collection.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>

            <div className="space-y-3 text-sm text-slate-300">
              <p>📍 Book City</p>
              <p>📞 +880 1234-567890</p>
              <p>✉️ support@bookhouse.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-5 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Book House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}