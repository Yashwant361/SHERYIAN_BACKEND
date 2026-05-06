// import React, { useEffect, useState } from 'react'

// function Home() {

//     const [product, setProduct] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         async function fetchProduct() {
//             try {
//                 const res = await fetch("https://fakestoreapi.com/products")

//                 if (!res.ok) {
//                     throw new Error('Failed to fetch data')
//                 }

//                 const data = await res.json()
//                 setProduct(data)

//             } catch (error) {
//                 setError(error.message)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchProduct()
//     }, [])

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error}</p>

//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-4">Products</h1>

//             <div className="grid grid-cols-3 gap-6">
//                 {product.map((item) => (
//                     <div key={item.id} className="border p-4 rounded shadow">
//                         <img src={item.image} alt="" className="h-40 mx-auto" />
//                         <h2 className="font-semibold">{item.title}</h2>
//                         <p className="text-green-600">₹ {item.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Home


import React, { useEffect, useState } from "react";
import ProductCard from "../Pages/Product";
import ReviewList from "../Pages/ReviewList";
import reviewsData from "../data/reviews";

function Home() {
    const [product, setProduct] = useState([]);
    const [selectedReviews, setSelectedReviews] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduct(data);
        }

        fetchProduct();
    }, []);

    function handleReview(id) {

        console.log("Clicked ID:", id);
        console.log("Review:", reviewsData[id]);
        setSelectedReviews(
            reviewsData[id] || ["No reviews available", "Try later", "N/A"]
        );
    }

function handleAddToCart(item) {
    setCart(prevCart => {
        const updatedCart = [...prevCart, item];
        console.log("Cart:", updatedCart); // ✅ correct value
        return updatedCart;
    });
}

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            <div className="grid grid-cols-3 gap-6">
                {product.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        onReview={handleReview}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

            {/* // reviews */}
            {selectedReviews.length > 0 ? (
                <div>
                    <h1>Reviews Visible</h1>
                    <ReviewList reviews={selectedReviews} />
                </div>
            ) : (
                <h1>No Reviews Yet</h1>
            )}
        </div>
    );
}

export default Home;