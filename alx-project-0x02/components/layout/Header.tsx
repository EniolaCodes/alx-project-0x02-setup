import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800">EduTrac</h1>

        <nav className="flex items-center space-x-6">
          <Link
            href="/home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
