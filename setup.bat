@echo off
echo 🔄 Installing dependencies...
npm install

echo 📦 Installing Tailwind CSS, PostCSS, and Autoprefixer...
npm install -D tailwindcss postcss autoprefixer

echo 🛠️ Creating Tailwind config...
npx tailwindcss init -p

echo ✅ Verifying postcss.config.js...
echo module.exports = {> postcss.config.js
echo.  plugins: {>> postcss.config.js
echo.    tailwindcss: {},>> postcss.config.js
echo.    autoprefixer: {},>> postcss.config.js
echo.  },>> postcss.config.js
echo.};>> postcss.config.js

echo 🚀 Starting development server...
npm run dev
