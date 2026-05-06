import React from "react";

function ReviewList({ reviews }) {
  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="font-bold mb-2">Reviews:</h2>

      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>⭐ {rev}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;