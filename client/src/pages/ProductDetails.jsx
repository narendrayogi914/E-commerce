import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/products/${id}`
        ); // Fetch individual product
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Display a loading state until the product is fetched
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <p className="text-gray-800 mb-4">{product.description}</p>
      <p className="text-gray-800">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="text-gray-800">
        <strong>Subcategory:</strong> {product.subcategory}
      </p>
      <p className="text-gray-800">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="text-gray-800">
        <strong>Stock:</strong> {product.stock}
      </p>
      <p className="text-gray-800">
        <strong>Rating:</strong> {product.rating}
      </p>
      <p className="text-gray-800">
        <strong>Reviews:</strong> {product.reviews}
      </p>
    </div>
  );
};

export default ProductDetails;
