import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { state, removeItem, updateQuantity, closeCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  if (!state.isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="close-btn" onClick={closeCart}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {state.items.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p>Add some delicious items from our menu!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {state.items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <span className="item-emoji">{item.emoji}</span>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="item-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar; 