import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.price} DA</p>
      <button onClick={() => addToCart(product)} className="bg-black text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
