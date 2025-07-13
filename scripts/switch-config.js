#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Available configurations
const configs = {
  'breaking-buns': 'Breaking Buns PDX - Asian Street Food',
  'taco-truck': 'Taco Truck Deluxe - Mexican Street Tacos',
  'burger-cart': 'Burger Cart - Gourmet Burgers',
  'pizza-truck': 'Pizza Truck - Artisan Pizzas',
  'custom': 'Custom Configuration'
};

function showUsage() {
  console.log('\n🍔 Food Cart Template Configuration Switcher\n');
  console.log('Usage: node scripts/switch-config.js <config-name>\n');
  console.log('Available configurations:');
  Object.entries(configs).forEach(([key, description]) => {
    console.log(`  ${key}: ${description}`);
  });
  console.log('\nExample: node scripts/switch-config.js breaking-buns');
}

function updateConfigFile(configName) {
  const configPath = path.join(__dirname, '../src/config/foodCartConfig.ts');
  
  if (!fs.existsSync(configPath)) {
    console.error('❌ Configuration file not found!');
    return false;
  }

  let content = fs.readFileSync(configPath, 'utf8');
  
  // Update the currentConfig export
  const newConfig = `export const currentConfig: FoodCartConfig = ${configName}Config;`;
  
  // Replace the current config line
  content = content.replace(
    /export const currentConfig: FoodCartConfig = .*?Config;/,
    newConfig
  );
  
  fs.writeFileSync(configPath, content);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    showUsage();
    return;
  }
  
  const configName = args[0];
  
  if (!configs[configName]) {
    console.error(`❌ Unknown configuration: ${configName}`);
    showUsage();
    return;
  }
  
  console.log(`🔄 Switching to ${configs[configName]}...`);
  
  if (updateConfigFile(configName)) {
    console.log(`✅ Successfully switched to ${configName} configuration!`);
    console.log(`📝 Don't forget to:`);
    console.log(`   - Update menu items in src/data/menuData.ts`);
    console.log(`   - Add your assets to public/images/${configName}/`);
    console.log(`   - Customize colors and branding in the config file`);
    console.log(`   - Update contact information and hours`);
  } else {
    console.error('❌ Failed to update configuration file');
  }
}

if (require.main === module) {
  main();
}

module.exports = { updateConfigFile, configs }; 