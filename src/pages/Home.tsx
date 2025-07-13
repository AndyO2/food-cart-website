import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food on Wheels</h1>
          <p>Fresh, flavorful, and made with love. Our food cart brings the best local cuisine right to your neighborhood.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <Link to="/catering" className="btn btn-secondary">Catering</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="food-cart-illustration">🍔</div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured">
        <div className="container">
          <h2>Today's Specials</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="item-image">🍕</div>
              <h3>Margherita Pizza</h3>
              <p>Fresh mozzarella, basil, and our signature tomato sauce</p>
              <span className="price">$12.99</span>
            </div>
            <div className="featured-item">
              <div className="item-image">🌮</div>
              <h3>Street Tacos</h3>
              <p>Authentic Mexican flavors with fresh cilantro and lime</p>
              <span className="price">$8.99</span>
            </div>
            <div className="featured-item">
              <div className="item-image">🥪</div>
              <h3>Gourmet Sandwich</h3>
              <p>Premium meats, fresh vegetables, and artisan bread</p>
              <span className="price">$10.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose Our Food Cart?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>We source only the freshest local ingredients for every dish.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>Fast, friendly service so you can enjoy your meal without the wait.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💝</div>
              <h3>Made with Love</h3>
              <p>Every dish is prepared with care and attention to detail.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h3>Local Favorite</h3>
              <p>Part of the community for years, serving our neighbors daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Taste the Difference?</h2>
          <p>Visit us today and experience the best food cart in town!</p>
          <div className="cta-buttons">
            <Link to="/menu" className="btn btn-primary">Order Now</Link>
            <Link to="/hours" className="btn btn-outline">Check Hours</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 