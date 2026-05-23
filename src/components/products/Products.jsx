import React from 'react';
import './Products.css';

const productsList = [
  { id: 1, name: 'Bedsheets', description: 'Premium cotton and silk blend bedsheets.' },
  { id: 2, name: 'Curtains', description: 'Elegant curtains to enhance your room aesthetic.' },
  { id: 3, name: 'Sofas', description: 'Premium textiled sofas for elegant living spaces.' },
  { id: 4, name: 'Blankets', description: 'Soft, warm and luxurious blankets for cozy nights.' },
  { id: 5, name: 'Towels', description: 'Highly absorbent, plush towels for everyday use.' },
  { id: 6, name: 'Home Decor', description: 'Unique home furnishing items to complete your space.' }
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2>Products We Sell</h2>
        <div className="products-grid">
          {productsList.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder">
                  [{product.name} Image]
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
