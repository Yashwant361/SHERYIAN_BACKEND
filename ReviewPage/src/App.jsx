import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ReviewPage from "./Pages/ReviewPage";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">MyApp</h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/product" className="hover:text-yellow-400 transition">
            Product
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review/:id" element={<ReviewPage/>} />
          {/* <Route path="/product" element={<Product />} /> */}
        </Routes>
      </div>
    </>
  );
}