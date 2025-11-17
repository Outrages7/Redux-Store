import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-6 bg-white border-b border-green-200 shadow-sm">

      <NavLink to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6bR5rV7REPUHhzRRxqGmGzSWhGnZaxlnXA&s"
          alt="logo"
          className="w-14 h-14 rounded-xl object-cover"
        />
      </NavLink>

      <div className="flex items-center gap-8 text-gray-800 text-lg font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-all duration-200 ${
              isActive ? "text-gray-600" : "hover:text-gray-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `p-2 rounded-xl transition-all duration-200 ${
              isActive ? "bg-green-200" : "hover:bg-green-100"
            }`
          }
        >
          <FaShoppingCart size={20} />
        </NavLink>

      </div>

    </div>
  );
};

export default Navbar;
