# Food Cart Website Deployment Guide

This guide explains how to deploy your food cart website for different food carts and configurations.

## 🚀 Quick Deployment Options

### 1. GitHub Pages (Free)
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
# 1. Go to your GitHub repository
# 2. Go to Settings > Pages
# 3. Select "Deploy from a branch"
# 4. Choose "main" branch and "/docs" folder
# 5. Copy build folder contents to /docs
```

### 2. Netlify (Free)
```bash
# Build the project
npm run build

# Deploy to Netlify
# 1. Go to netlify.com
# 2. Drag and drop the build folder
# 3. Your site is live!
```

### 3. Vercel (Free)
```bash
# Connect your GitHub repository to Vercel
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Deploy automatically on every push
```

## 🎯 Multi-Food-Cart Deployment Strategies

### Strategy 1: Separate Repositories
**Best for:** Different food carts with completely different branding

```bash
# For each food cart:
git clone https://github.com/AndyO2/food-cart-website.git food-cart-name
cd food-cart-name
npm install

# Customize configuration
npm run switch-config custom
# Edit src/config/foodCartConfig.ts
# Edit src/data/menuData.ts
# Add assets to public/images/

# Deploy to separate domain
npm run build
# Deploy build folder to your hosting service
```

### Strategy 2: Single Repository, Multiple Branches
**Best for:** Managing multiple food carts in one place

```bash
# Create branch for each food cart
git checkout -b breaking-buns
npm run switch-config breaking-buns
# Customize and commit

git checkout -b taco-truck
npm run switch-config taco-truck
# Customize and commit

# Deploy each branch to different domains
```

### Strategy 3: Environment-Based Configuration
**Best for:** Advanced users who want dynamic configuration

```bash
# Set environment variable
REACT_APP_FOOD_CART=breaking-buns npm start
REACT_APP_FOOD_CART=taco-truck npm start
```

## 📁 Asset Organization

### Recommended Structure
```
public/
├── images/
│   ├── breaking-buns/          # Breaking Buns PDX
│   │   ├── logo.png
│   │   ├── hero-bao.jpg
│   │   ├── menu-items/
│   │   │   ├── bao-1.jpg
│   │   │   ├── bao-2.jpg
│   │   │   └── noodles.jpg
│   │   └── background.jpg
│   ├── taco-truck/             # Taco Truck
│   │   ├── logo.png
│   │   ├── hero-tacos.jpg
│   │   ├── menu-items/
│   │   │   ├── taco-1.jpg
│   │   │   ├── taco-2.jpg
│   │   │   └── burrito.jpg
│   │   └── background.jpg
│   └── burger-cart/            # Burger Cart
│       ├── logo.png
│       ├── hero-burger.jpg
│       └── menu-items/
└── favicon.ico
```

### Image Optimization
- **Hero Images**: 1200x800px, JPG format
- **Menu Item Images**: 400x300px, JPG format
- **Logo**: 200x200px, PNG format with transparency
- **Background Images**: 1920x1080px, JPG format

## 🔧 Configuration Management

### Switching Between Configurations
```bash
# Switch to Breaking Buns PDX
npm run switch-config breaking-buns

# Switch to Taco Truck
npm run switch-config taco-truck

# Switch to Burger Cart
npm run switch-config burger-cart

# Switch to Pizza Truck
npm run switch-config pizza-truck
```

### Custom Configuration
```bash
# Create custom configuration
npm run switch-config custom

# Edit src/config/foodCartConfig.ts
# Add your custom configuration
export const customConfig: FoodCartConfig = {
  name: "Your Food Cart",
  tagline: "Your Tagline",
  // ... rest of configuration
};

export const currentConfig: FoodCartConfig = customConfig;
```

## 🌐 Domain Setup

### Custom Domain
1. **Purchase domain** (e.g., breakingbunspdx.com)
2. **Configure DNS** to point to your hosting service
3. **Set up SSL certificate** (usually automatic)
4. **Update configuration** with new domain

### Subdomain Strategy
- breaking-buns.yourdomain.com
- taco-truck.yourdomain.com
- burger-cart.yourdomain.com

## 📱 SEO Optimization

### Meta Tags
Update `public/index.html`:
```html
<title>Your Food Cart Name</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords">
```

### Google Analytics
Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Continuous Deployment

### GitHub Actions (Automated)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images Not Loading**
- Check file paths in configuration
- Ensure images are in correct directory
- Verify file permissions

**Configuration Not Updating**
```bash
# Clear browser cache
# Restart development server
npm start
```

**Deployment Issues**
- Check build folder contents
- Verify hosting service settings
- Check domain DNS configuration

## 📞 Support

For deployment issues:
1. Check hosting service documentation
2. Review build logs
3. Test locally first
4. Contact hosting service support

---

**Happy Deploying! 🚀🍔** 