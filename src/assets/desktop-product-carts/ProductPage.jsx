import React from 'react';
import ProductCard from './ProductCard.jsx';
import "./Cart.css"
import Cart from './cart.jsx';
function ProductPage() {
  const products = [
    { image: '/cart-1.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: 'cart-2.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-3.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-4.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-5.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-6.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-7.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
    { image: '/cart-8.png', title: 'Graphic Design', subtitle: 'English Department', price: '$6.48' },
  ];


  return (
    <div>
      <Cart/>
      <div className="product-page">
        <div className="product-row">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </div>
        <div className="product-row">
          {products.slice(4).map((product, index) => (
            <ProductCard
              key={index + 4}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

