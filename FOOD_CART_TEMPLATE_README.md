# Food Cart Website Template

A React-based website template for food carts and food trucks. This template is designed to be easily customizable for different food carts with their own branding, menus, and assets.

## 🚀 Quick Start

### 1. Clone the Template
```bash
git clone https://github.com/AndyO2/food-cart-website.git
cd food-cart-website
npm install
```

### 2. Configure Your Food Cart

Edit `src/config/foodCartConfig.ts` to set up your food cart:

```typescript
export const currentConfig: FoodCartConfig = {
  name: "Your Food Cart Name",
  tagline: "Your Tagline",
  description: "Your description",
  
  phone: "(555) 123-4567",
  email: "your@email.com",
  address: "Your Address",
  
  hours: {
    "Monday-Friday": "11am-9pm",
    "Saturday-Sunday": "12pm-10pm"
  },
  
  logo: "🍔", // or path to logo image
  primaryColor: "#ff6b6b",
  secondaryColor: "#ff8e53",
  
  // ... more configuration
};
```

### 3. Add Your Assets

Create your assets in the appropriate directory:

```
public/
├── images/
│   ├── breaking-buns/          # Breaking Buns PDX assets
│   │   ├── logo.png
│   │   ├── hero-bao.jpg
│   │   └── menu-items/
│   └── taco-truck/             # Taco Truck assets
│       ├── logo.png
│       ├── hero-tacos.jpg
│       └── menu-items/
```

### 4. Update Menu Data

Edit `src/data/menuData.ts` with your menu items:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Your Menu Item",
    description: "Description",
    price: 10.99,
    category: "main",
    emoji: "🍔",
    popular: true
  },
  // ... more items
];
```

### 5. Customize Styling

Update CSS files in `src/` to match your branding colors and style.

## 📁 Project Structure

```
food-cart-website/
├── public/
│   ├── images/
│   │   ├── breaking-buns/      # Breaking Buns PDX assets
│   │   └── taco-truck/         # Taco Truck assets
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/             # Reusable components
│   ├── pages/                  # Page components
│   ├── context/                # React context (cart, etc.)
│   ├── data/                   # Menu data
│   ├── config/                 # Food cart configuration
│   └── styles/                 # CSS files
├── src/config/foodCartConfig.ts # Main configuration file
└── src/data/menuData.ts        # Menu items data
```

## 🎨 Customization Guide

### Branding
- **Colors**: Update `primaryColor` and `secondaryColor` in config
- **Logo**: Add logo image to `public/images/your-cart/` and reference in config
- **Fonts**: Update CSS variables in `src/index.css`

### Menu System
- **Categories**: Define in `src/data/menuData.ts`
- **Items**: Add menu items with descriptions, prices, and emojis
- **Special Features**: Add quantity options, dietary info, etc.

### Features
- **Shopping Cart**: Built-in cart functionality
- **Checkout**: Pickup order system
- **Responsive**: Mobile-friendly design
- **SEO**: Meta tags and structured data

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy the build folder to GitHub Pages
```

### Netlify
```bash
npm run build
# Drag the build folder to Netlify
```

### Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel
```

## 📱 Features

### ✅ Built-in Features
- **Shopping Cart**: Add/remove items, quantity management
- **Checkout System**: Pickup order form
- **Responsive Design**: Works on all devices
- **Menu Categories**: Filter by food type
- **Order Confirmation**: Success page with pickup details
- **Contact Information**: Hours, location, phone

### 🎯 Customizable Features
- **Branding**: Colors, logos, fonts
- **Menu Items**: Categories, prices, descriptions
- **Assets**: Images, backgrounds, icons
- **Contact Info**: Phone, email, address, hours
- **Social Media**: Instagram, Facebook, Twitter links

## 🔧 Configuration Options

### Food Cart Config
```typescript
interface FoodCartConfig {
  name: string;                    // Food cart name
  tagline: string;                 // Short description
  description: string;             // Long description
  phone: string;                   // Contact phone
  email: string;                   // Contact email
  address: string;                 // Physical address
  hours: { [key: string]: string }; // Operating hours
  logo: string;                    // Logo emoji or image path
  primaryColor: string;            // Main brand color
  secondaryColor: string;          // Secondary brand color
  assets: {                        // Image assets
    heroImage?: string;
    logoImage?: string;
    backgroundImage?: string;
  };
  features: {                      // Feature flags
    hasDelivery: boolean;
    hasPickup: boolean;
    hasCatering: boolean;
    acceptsOnlineOrders: boolean;
  };
}
```

### Menu Item Structure
```typescript
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  popular?: boolean;
  options?: {                      // For quantity-based pricing
    quantity: number;
    price: number;
  }[];
}
```

## 🎨 Styling Customization

### CSS Variables
Update these in `src/index.css`:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #ff8e53;
  --text-color: #2c3e50;
  --background-color: #f8f9fa;
}
```

### Component Styling
- **Header**: `src/components/Header.css`
- **Menu**: `src/pages/Menu.css`
- **Cart**: `src/components/CartSidebar.css`
- **Checkout**: `src/pages/Checkout.css`

## 📊 SEO & Performance

### Meta Tags
Update in `public/index.html`:
```html
<title>Your Food Cart Name</title>
<meta name="description" content="Your description">
<meta name="keywords" content="food, cart, truck, menu">
```

### Performance
- Optimized images
- Lazy loading
- Responsive design
- Fast loading times

## 🔄 Creating Multiple Food Cart Sites

### Method 1: Separate Repositories
1. Clone this template for each food cart
2. Customize config and assets for each
3. Deploy to separate domains

### Method 2: Single Repository, Multiple Configs
1. Create multiple config files
2. Switch between configs
3. Build separate sites from same codebase

### Method 3: Template Repository
1. Use this as a template repository
2. Create new repos from this template
3. Customize each independently

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## 📝 License

This template is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on GitHub or contact the maintainer.

---

**Happy Food Carting! 🚚🍔** 