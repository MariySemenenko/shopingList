import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.price} грн</p>
      <button onClick={() => addToCart(product)}>Додати в корзину</button>
    </div>
  );
};

export default Product;