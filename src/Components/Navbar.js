import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart = useSelector((state) => state.cart);

  return (
    <div className="
      w-full flex items-center justify-between 
      px-12 py-6 
      bg-neutral-50 
      border-b border-stone-200 
      shadow-sm
    ">

      {/* Logo */}
      <NavLink to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Logo_Brandmark.png"
          alt="logo"
          className="
            w-14 h-14 
            rounded-xl 
            object-cover 
            opacity-80 hover:opacity-100 
            transition-all duration-300
          "
        />
      </NavLink>

      {/* Right side items */}
      <div className="flex items-center gap-12 text-neutral-700 font-light tracking-wide text-base">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-all duration-300 ${
              isActive
                ? "text-neutral-900 tracking-widest"
                : "hover:text-neutral-600"
            }`
          }
        >
          Home
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative p-3 rounded-lg transition-all duration-300 
            border border-stone-200 backdrop-blur-sm 
            ${
              isActive
                ? "bg-violet-100/60 shadow-sm"
                : "hover:bg-violet-50"
            }`
          }
        >
          <FaShoppingCart size={20} className="text-neutral-700" />

          {/* Badge */}
          {cart.length > 0 && (
            <span
              className="
                absolute -top-1 -right-1 
                text-xs 
                w-5 h-5 
                flex items-center justify-center 
                rounded-full 
                bg-violet-300 text-neutral-700 
                shadow-sm 
                font-normal
              "
            >
              {cart.length}
            </span>
          )}
        </NavLink>

      </div>

    </div>
  );
};

export default Navbar;
