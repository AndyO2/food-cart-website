import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems, categories } from '../data/menuData';
import { currentConfig } from '../config/foodCartConfig';
import './Menu.css';



const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: number]: number }>({});
  const { addItem } = useCart();

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="container">
          <h1>{currentConfig.name} Menu</h1>
          <p>{currentConfig.description}</p>
        </div>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`menu-item ${item.popular ? 'popular' : ''}`}>
              {item.popular && <span className="popular-badge">🔥 Popular</span>}
              <div className="item-emoji">{item.emoji}</div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                
                {/* Quantity selection for bao items */}
                {item.category === 'bao' && item.options && (
                  <div className="quantity-selector">
                    <label>Quantity:</label>
                    <select
                      value={selectedQuantities[item.id] || 2}
                      onChange={(e) => setSelectedQuantities({
                        ...selectedQuantities,
                        [item.id]: parseInt(e.target.value)
                      })}
                    >
                      {item.options.map(option => (
                        <option key={option.quantity} value={option.quantity}>
                          {option.quantity} for ${option.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                <div className="item-footer">
                  <span className="item-price">
                    ${item.category === 'bao' && item.options 
                      ? item.options.find(opt => opt.quantity === (selectedQuantities[item.id] || 2))?.price.toFixed(2) || item.price.toFixed(2)
                      : item.price.toFixed(2)
                    }
                  </span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => {
                      const quantity = item.category === 'bao' ? (selectedQuantities[item.id] || 2) : 1;
                      const price = item.category === 'bao' && item.options 
                        ? item.options.find(opt => opt.quantity === quantity)?.price || item.price
                        : item.price;
                      
                      addItem({
                        id: item.id,
                        name: `${item.name}${quantity > 1 ? ` (${quantity} bao)` : ''}`,
                        price: price,
                        emoji: item.emoji
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="menu-notice">
          <h3>🥟 Gua Bao Specials</h3>
          <p>All Gua Bao items come in quantities of 2, 3, or 4. Choose your preferred quantity when ordering!</p>
        </div>
      </div>
    </div>
  );
};

export default Menu; 