import React from 'react';

function Cart() {
  const texts = [
    'Featured Products',
    'BESTSELLER PRODUCTS',
    'Problems trying to resolve the conflict between'
  ];
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {texts.map((text, index) => (
        <h2 key={index}>{text}</h2>
      ))}
    </div>
  );
}

export default Cart;
