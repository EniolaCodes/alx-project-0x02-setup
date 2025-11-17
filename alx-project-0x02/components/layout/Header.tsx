import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-6 px-20 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">EduTrac</h1>
        {/* Navigation */}
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
          <Link
            href="/posts"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
