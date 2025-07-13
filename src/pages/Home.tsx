import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Authentic Asian Street Food</h1>
          <p>Fresh, flavorful Gua Bao (steamed buns) and noodles made with love. Breaking Buns PDX brings authentic Asian street food to Portland.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <Link to="/catering" className="btn btn-secondary">Catering</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="food-cart-illustration">🥟</div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured">
        <div className="container">
          <h2>Popular Items</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="item-image">🥟</div>
              <h3>Ota Tofu Bao</h3>
              <p>Ota Tofu coated in rice flour and house made togarashi and fried crisp</p>
              <span className="price">$8.00</span>
            </div>
            <div className="featured-item">
              <div className="item-image">🥪</div>
              <h3>Chicken Philly Cheesesteak Bao</h3>
              <p>Chicken thighs, sauteed Bell Peppers, Mushrooms and Onions topped with Cheddar cheese</p>
              <span className="price">$8.50</span>
            </div>
            <div className="featured-item">
              <div className="item-image">🥓</div>
              <h3>Pork Belly Bao</h3>
              <p>Oven Roasted Pork Belly sauteed with Mushrooms and Napa Cabbage, glazed with Sweet Soy sauce</p>
              <span className="price">$9.50</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose Breaking Buns PDX?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>We source only the freshest local ingredients for every dish.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🥟</div>
              <h3>Authentic Asian</h3>
              <p>Authentic Gua Bao (steamed buns) and traditional Asian street food.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💝</div>
              <h3>Made with Love</h3>
              <p>Every dish is prepared with care and attention to detail.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h3>Portland Local</h3>
              <p>Part of the Portland community, serving authentic Asian cuisine daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Taste Authentic Asian Street Food?</h2>
          <p>Visit us today and experience the best Gua Bao in Portland!</p>
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