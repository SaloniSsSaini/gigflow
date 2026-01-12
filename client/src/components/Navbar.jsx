import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        GigFlow
      </Link>

      <div className="space-x-6">
        <Link to="/post-gig" className="hover:text-gray-300">
          Post Gig
        </Link>
        <Link to="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
