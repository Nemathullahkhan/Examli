import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-website-white.png";

const Header = () => {
  return (
    <header className="bg-[#f49c00] text-white py-4 px-6 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logoWhite} alt="Examli Logo" className="h-10" />
          </Link>
        </div>
        <nav className="space-x-8 items-center text-md text-zinc-100">
          <Link
            to="/"
            className="hover:text-white hover:font-medium transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-white hover:font-medium transition-all"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-white hover:font-medium transition-all"
          >
            Contact Us
          </Link>
          <Link to="/">
            <button className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-[#f49c00] px-6 py-1.5 font-semibold rounded-md shadow transition-all hover:scale-105 ">
              Request Demo{" "}
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
