import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [post, setpost] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setpost(data);
    } catch (error) {
      toast.error("Something went wrong");
      setpost([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 p-10">
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {post.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        toast.info("No data found")
      )}
    </div>
  );
};

export default Home;
