import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const Home = () => {
  const { products } = useProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Iska Co - Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="border rounded-xl p-2 shadow hover:shadow-lg transition-all">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-medium mt-2">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.price} DA</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
