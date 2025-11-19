import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slice/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-stone-50 p-6 rounded-md shadow-sm">
      <div className="flex items-start gap-6 border border-stone-200 p-6 rounded-md bg-stone-50">

        <div className="w-28 h-28 overflow-hidden rounded-sm shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <div className="flex-1 space-y-2">

          <h1 className="text-stone-700 font-light tracking-wide text-lg line-clamp-1">
            {item.title}
          </h1>

          <h1 className="text-stone-500 text-sm leading-relaxed tracking-wide line-clamp-2">
            {item.description}
          </h1>

          <div className="text-stone-700 font-normal tracking-wide text-base mt-2">
            ₹ {item.price}
          </div>
        </div>

        <div
          onClick={removeFromCart}
          className="cursor-pointer p-2 rounded-sm hover:bg-stone-200 transition shadow-none"
        >
          <FcDeleteDatabase className="text-2xl opacity-80" />
        </div>

      </div>
    </div>
  );
};

export default CartItem;
