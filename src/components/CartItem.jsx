import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div style={{paddingTop: '7px', paddingLeft: '20px'}}>
      <h4>{item.name}</h4>
      <p>{item.price} грн</p>
      <button onClick={() => removeFromCart(item)}>Видалити</button>
    </div>
  );
};

export default CartItem;