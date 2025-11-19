import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from "../Components/CartItem"

const Cart = () => {
const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-stone-50 p-10">
      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-10">

          <div className="space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="border border-stone-200 rounded-md bg-neutral-50 p-8 shadow-sm">
            <div className="text-neutral-700 text-xl font-light tracking-wide">
              Your Cart
            </div>

            <div className="text-stone-500 text-sm tracking-wide mt-1">
              Summary
            </div>

            <p className="mt-4 text-neutral-700 tracking-wide">
              Total items: {cart.length}
            </p>
          </div>

          <div className="border border-stone-200 rounded-md bg-neutral-50 p-8 shadow-sm space-y-4">
            <p className="text-neutral-700 text-lg tracking-wide">
              Total Amount: ₹ {totalAmount}
            </p>

            <button className="w-full py-3 rounded-sm border border-stone-300 bg-stone-100 hover:bg-stone-200 transition tracking-widest uppercase text-sm text-neutral-700 font-light">
              Checkout
            </button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
          <h1 className="text-neutral-700 text-2xl font-light tracking-wide">
            Cart is Empty
          </h1>

          <Link to={"/"}>
            <button className="px-6 py-3 rounded-sm border border-stone-300 bg-neutral-50 hover:bg-stone-100 transition tracking-widest uppercase text-sm text-neutral-700 font-light">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
