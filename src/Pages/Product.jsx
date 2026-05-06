import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item, onReview, onAddToCart }) {
    let navigate=useNavigate()
    return (
        <div className="border p-4 rounded shadow">
            <img src={item.image} alt="" className="h-40 mx-auto" />
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-green-600">₹ {item.price}</p>

            <div className="mt-3 flex gap-2">
                <button
                    onClick={() => onAddToCart(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Add to Cart
                </button>

                <button
                    className="bg-green-500 text-white px-2 py-1"
                    onClick={() => navigate(`/review/${item.id}`, { state: item })}
                >
                    Reviews
                </button>
            </div>
        </div>
    );
}

export default ProductCard;