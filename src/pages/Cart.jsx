import React from 'react';
import { useProducts } from '../context/ProductContext';

const Cart = () => {
  const { cart } = useProducts();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? <p>No items in cart.</p> :
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="border p-2 rounded">{item.name} - {item.price} DA</li>
          ))}
        </ul>}
    </div>
  );
};

export default Cart;
