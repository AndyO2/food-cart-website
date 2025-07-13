import React, { useState } from 'react';
import './Menu.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  popular?: boolean;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    // Appetizers
    { id: 1, name: "Loaded Nachos", description: "Crispy tortilla chips topped with melted cheese, jalapeños, and fresh salsa", price: 8.99, category: "appetizers", emoji: "🧀" },
    { id: 2, name: "Bruschetta", description: "Toasted bread with fresh tomatoes, basil, and garlic", price: 6.99, category: "appetizers", emoji: "🍅" },
    { id: 3, name: "Mozzarella Sticks", description: "Crispy breaded mozzarella served with marinara sauce", price: 7.99, category: "appetizers", emoji: "🧀" },
    
    // Main Dishes
    { id: 4, name: "Margherita Pizza", description: "Fresh mozzarella, basil, and our signature tomato sauce", price: 12.99, category: "main", emoji: "🍕", popular: true },
    { id: 5, name: "Street Tacos", description: "Authentic Mexican flavors with fresh cilantro and lime", price: 8.99, category: "main", emoji: "🌮", popular: true },
    { id: 6, name: "Gourmet Burger", description: "Premium beef patty with lettuce, tomato, and special sauce", price: 11.99, category: "main", emoji: "🍔" },
    { id: 7, name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine lettuce, parmesan, and caesar dressing", price: 9.99, category: "main", emoji: "🥪" },
    { id: 8, name: "Pasta Carbonara", description: "Creamy pasta with bacon, eggs, and parmesan cheese", price: 13.99, category: "main", emoji: "🍝" },
    
    // Sides
    { id: 9, name: "French Fries", description: "Crispy golden fries seasoned with sea salt", price: 4.99, category: "sides", emoji: "🍟" },
    { id: 10, name: "Onion Rings", description: "Beer-battered onion rings with dipping sauce", price: 5.99, category: "sides", emoji: "🧅" },
    { id: 11, name: "Side Salad", description: "Fresh mixed greens with cherry tomatoes and vinaigrette", price: 4.99, category: "sides", emoji: "🥗" },
    
    // Desserts
    { id: 12, name: "Chocolate Brownie", description: "Warm chocolate brownie with vanilla ice cream", price: 6.99, category: "desserts", emoji: "🍫" },
    { id: 13, name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 7.99, category: "desserts", emoji: "☕" },
    { id: 14, name: "Cheesecake", description: "New York style cheesecake with berry compote", price: 6.99, category: "desserts", emoji: "🍰" },
    
    // Drinks
    { id: 15, name: "Fresh Lemonade", description: "Homemade lemonade with real lemons", price: 3.99, category: "drinks", emoji: "🍋" },
    { id: 16, name: "Iced Coffee", description: "Cold brew coffee with cream and sugar", price: 4.99, category: "drinks", emoji: "☕" },
    { id: 17, name: "Smoothie", description: "Fresh fruit smoothie with yogurt", price: 5.99, category: "drinks", emoji: "🥤" },
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main', name: 'Main Dishes' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Delicious food made fresh daily with the finest ingredients</p>
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
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="menu-notice">
          <h3>📞 Call Ahead for Large Orders</h3>
          <p>For orders of 10+ items, please call us at (555) 123-4567 to ensure we can prepare your order efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu; 