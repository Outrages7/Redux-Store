import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT THESE 2:
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-stone-50 min-h-screen">
        <Navbar />

        {/* 🔥 This is what makes toast appear */}
  <ToastContainer
  position="top-left"
  autoClose={1500}
  hideProgressBar={false}
  pauseOnHover
  closeOnClick
  draggable
  newestOnTop={true}
  transition={Slide}
  toastClassName="bg-stone-100 border border-stone-300 text-stone-700 shadow-md rounded-md px-4 py-3"
  bodyClassName="text-sm font-light tracking-wide"
  progressClassName="bg-amber-400"
/>


        <div className="pt-8 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
