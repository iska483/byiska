import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price, image });
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product name" className="w-full p-2 border rounded" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="w-full p-2 border rounded" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-black text-white py-2 px-4 rounded">Add Product</button>
    </form>
  );
};

export default AddProduct;
