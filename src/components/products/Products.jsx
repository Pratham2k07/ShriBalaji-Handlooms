import React, { useState, useEffect } from 'react';
import './Products.css';

const productsList = [
  { 
    id: 1, 
    name: 'Bedsheets', 
    description: 'Premium cotton and silk blend bedsheets.',
    varieties: [
      { name: 'Cotton Bedsheets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Cotton+Bedsheets' },
      { name: 'Silk Bedsheets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Silk+Bedsheets' },
      { name: 'Printed Bedsheets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Printed+Bedsheets' },
      { name: 'King Size Bedsheets', image: 'https://placehold.co/400x300/141414/D4AF37?text=King+Size' },
      { name: 'Queen Size Bedsheets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Queen+Size' }
    ]
  },
  { 
    id: 2, 
    name: 'Curtains', 
    description: 'Elegant curtains to enhance your room aesthetic.',
    varieties: [
      { name: 'Blackout Curtains', image: 'https://placehold.co/400x300/141414/D4AF37?text=Blackout' },
      { name: 'Sheer Curtains', image: 'https://placehold.co/400x300/141414/D4AF37?text=Sheer' },
      { name: 'Printed Curtains', image: 'https://placehold.co/400x300/141414/D4AF37?text=Printed' },
      { name: 'Linen Curtains', image: 'https://placehold.co/400x300/141414/D4AF37?text=Linen' }
    ]
  },
  { 
    id: 3, 
    name: 'Sofas', 
    description: 'Premium textiled sofas for elegant living spaces.',
    varieties: [
      { name: '2-Seater Sofa', image: 'https://placehold.co/400x300/141414/D4AF37?text=2-Seater' },
      { name: '3-Seater Sofa', image: 'https://placehold.co/400x300/141414/D4AF37?text=3-Seater' },
      { name: 'L-Shaped Sofa', image: 'https://placehold.co/400x300/141414/D4AF37?text=L-Shaped' },
      { name: 'Luxury Sofa', image: 'https://placehold.co/400x300/141414/D4AF37?text=Luxury' }
    ]
  },
  { 
    id: 4, 
    name: 'Blankets', 
    description: 'Soft, warm and luxurious blankets for cozy nights.',
    varieties: [
      { name: 'Fleece Blankets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Fleece' },
      { name: 'Woolen Blankets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Woolen' },
      { name: 'Weighted Blankets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Weighted' },
      { name: 'Mink Blankets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Mink' }
    ]
  },
  { 
    id: 5, 
    name: 'Towels', 
    description: 'Highly absorbent, plush towels for everyday use.',
    varieties: [
      { name: 'Bath Towels', image: 'https://placehold.co/400x300/141414/D4AF37?text=Bath+Towels' },
      { name: 'Hand Towels', image: 'https://placehold.co/400x300/141414/D4AF37?text=Hand+Towels' },
      { name: 'Face Towels', image: 'https://placehold.co/400x300/141414/D4AF37?text=Face+Towels' },
      { name: 'Beach Towels', image: 'https://placehold.co/400x300/141414/D4AF37?text=Beach+Towels' }
    ]
  },
  { 
    id: 6, 
    name: 'Home Decor', 
    description: 'Unique home furnishing items to complete your space.',
    varieties: [
      { name: 'Vases', image: 'https://placehold.co/400x300/141414/D4AF37?text=Vases' },
      { name: 'Wall Art', image: 'https://placehold.co/400x300/141414/D4AF37?text=Wall+Art' },
      { name: 'Cushion Covers', image: 'https://placehold.co/400x300/141414/D4AF37?text=Cushion+Covers' },
      { name: 'Rugs & Carpets', image: 'https://placehold.co/400x300/141414/D4AF37?text=Rugs' }
    ]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  return (
    <section id="products" className="section">
      <div className="container">
        <h2>Products We Sell</h2>
        <div className="products-grid">
          {productsList.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
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

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="product-modal-close" 
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="product-modal-header">
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
            </div>
            
            <div className="product-modal-body">
              <h4>Available Varieties</h4>
              <div className="varieties-grid">
                {selectedProduct.varieties.map((variety, index) => (
                  <div key={index} className="variety-card">
                    <div className="variety-image-container">
                      <img src={variety.image} alt={variety.name} className="variety-image" />
                    </div>
                    <p className="variety-name">{variety.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
