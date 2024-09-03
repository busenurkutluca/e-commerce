import React from 'react';

function ProductCard({ image, title, subtitle, price }) {
    return (
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-title">{title}</h3>
        <p className="product-subtitle">{subtitle}</p> {/* Subtitle buraya eklendi */}
        <p className="product-price">{price}</p>
      </div>
    );
  }
export default ProductCard;


