import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slice/CartSlice";
import { toast } from "react-toastify";

const Product = ({ post }) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const exists = cart.some((p) => p.id === post.id);

  return (
    <div className="
      bg-white border border-stone-200 rounded-xl p-6 shadow-sm
      h-[520px] flex flex-col justify-between
    ">

      <div>
        <p className="text-stone-700 font-light text-lg line-clamp-1">
          {post.title}
        </p>

        <p className="text-stone-500 text-sm mt-2 line-clamp-3">
          {post.description}
        </p>

        <div className="w-full h-48 mt-4 rounded-md overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-stone-700 mt-3 text-base">₹ {post.price}</p>
      </div>

      {exists ? (
        <button
          onClick={() => {
            dispatch(remove(post.id));
            toast.info("Item Removed");
          }}
          className="w-full mt-4 py-3 rounded-md bg-stone-200 text-stone-700 
          font-light tracking-widest"
        >
          Remove Item
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(add(post));
            toast.success("Added to Cart");
          }}
          className="w-full mt-4 py-3 rounded-md bg-stone-100 text-stone-700 
          font-light tracking-widest hover:bg-stone-200 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
