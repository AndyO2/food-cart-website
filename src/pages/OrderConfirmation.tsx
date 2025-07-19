import React from 'react';
import { Link } from 'react-router';
import './OrderConfirmation.css';

const OrderConfirmation: React.FC = () => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-container">
        <div className="confirmation-card">
          <div className="success-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your order! We're preparing your food with care.
          </p>
          
          <div className="order-details">
            <h2>Order Details</h2>
            <div className="detail-item">
              <span className="label">Order Number:</span>
              <span className="value">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="detail-item">
              <span className="label">Estimated Pickup:</span>
              <span className="value">15-20 minutes</span>
            </div>
            <div className="detail-item">
              <span className="label">Location:</span>
              <span className="value">123 Food Cart Street, Downtown</span>
            </div>
          </div>

          <div className="pickup-instructions">
            <h3>Pickup Instructions</h3>
            <ul>
              <li>Please bring a valid ID for pickup</li>
              <li>Have your order number ready</li>
              <li>We'll call you when your order is ready</li>
              <li>Orders are held for 30 minutes after completion</li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Need to make changes?</h3>
            <p>Call us at <strong>(555) 123-4567</strong></p>
          </div>

          <div className="action-buttons">
            <Link to="/menu" className="order-again-btn">
              Order Again
            </Link>
            <Link to="/" className="home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 