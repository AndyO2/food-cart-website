import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { state, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: '',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and redirect to confirmation
    clearCart();
    navigate('/order-confirmation');
  };

  if (state.items.length === 0) {
    return (
      <div className="checkout">
        <div className="container">
          <div className="empty-cart-message">
            <h2>Your cart is empty</h2>
            <p>Add some items to your cart before checking out.</p>
            <button onClick={() => navigate('/menu')} className="back-to-menu-btn">
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="container">
          <h1>Checkout</h1>
          <p>Complete your order for pickup</p>
        </div>
      </div>

      <div className="container">
        <div className="checkout-content">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {state.items.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <span className="item-emoji">{item.emoji}</span>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="order-total">
              <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            </div>
          </div>

          <div className="checkout-form">
            <h2>Pickup Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pickupTime">Pickup Time *</label>
                <select
                  id="pickupTime"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select pickup time</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="specialInstructions">Special Instructions</label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Any special requests or dietary restrictions..."
                  rows={3}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => navigate('/menu')}
                  className="back-btn"
                >
                  Back to Menu
                </button>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 