import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import bannerImage from '../../assets/logos/banner.webp';

// Import your product images
import product1Image from '../../assets/Bbloomers/bk3.png';
import product2Image from '../../assets/Doudou/dd1.jpg';
import product3Image from '../../assets/Bshoes/bs1.jpg';

const TopSellingProduct = ({ title, price, image }) => (
  <div className="product-card">
    <div className="product-info">
      <div className="product-image-container">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}€</p>
    </div>
  </div>
);

export function HomePage() {
  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate('/store');
  };

  const topProducts = [
    { id: 1, title: "Baby Bloomers", price: "46", image: product1Image },
    { id: 2, title: "Baby Animal Doudou", price: "32", image: product2Image },
    { id: 3, title: "Baby Shoes", price: "36", image: product3Image },
  ];

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="banner-section">
        <img
          src={bannerImage}
          alt="Baby Clothes Store Banner"
          className="banner-image"
        />
      </div>

      {/* Top Selling Products Section */}
      <section className="products-section">
        <h2 className="section-title">Most Popular Items</h2>
        <div className="products-grid">
          {topProducts.map((product) => (
            <TopSellingProduct
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <div className="cta-section">
        <button 
          className="cta-button"
          onClick={handleStoreClick}
        >
          Go to Store
        </button>
      </div>
    </div>
  );
}