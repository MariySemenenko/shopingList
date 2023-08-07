import React, { useState } from 'react';
import Product from './Product';
import CartItem from './CartItem';

export const App = () => {
  const [products] = useState([
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
    { id: 4, name: 'Товар 4', price: 450 },
    { id: 5, name: 'Товар 5', price: 20 },
    { id: 6, name: 'Товар 6', price: 2100 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
  
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };

  return (
    <div  style={{ fontSize: '20px', color: 'lightslategrey', display: 'flex' }}>
      <div className="products">
        <h2>Товари</h2>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div style={{ display: 'flex', paddingLeft: '550px' }}>
       
        <h2>Корзина</h2>
       
        <div>
          <p style={{paddingLeft: '20px', paddingTop: '12px'}}>Загальна сума: {calculateTotal()} грн</p>
        </div>
        <div>
        {cart.map(item => (
          <CartItem  key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
        </div>
        </div>
      </div>
   
  );
};