import React from "react";
import { useLocation } from "react-router-dom";
import ReviewList from "./ReviewList";

function ReviewPage() {
  const { state } = useLocation(); // 👈 get product data

  if (!state) {
    return <h2 className="text-center mt-5">No Product Found</h2>;
  }

  // Dummy reviews (you can replace with API later)
  const reviews = [
    "Great product!",
    "Worth the price",
    "Quality is amazing",
    "Highly recommended"
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="border p-4 rounded shadow">
        <img src={state.image} className="h-40 mx-auto" />
        <h2 className="text-xl font-bold mt-2">{state.title}</h2>
        <p className="text-green-600">₹ {state.price}</p>
      </div>

      <ReviewList reviews={reviews} />
    </div>
  );
}

export default ReviewPage;