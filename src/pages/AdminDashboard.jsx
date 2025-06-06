import React from 'react';
import { useProducts } from '../context/ProductContext';

const AdminDashboard = () => {
  const { products } = useProducts();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="border p-2 rounded">{product.name} - {product.price} DA</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
