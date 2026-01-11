# React Boilerplate

A modern, production-ready React boilerplate with Tailwind CSS, dark mode support, and a comprehensive component library.

> [!IMPORTANT]
> **Copying this template to a new project?** Make sure you have the `postcss.config.js` file in your root directory! Without it, Tailwind CSS won't work and your UI will be completely unstyled. See the [Troubleshooting](#-troubleshooting) section below.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── layouts/         # Layout wrappers
├── pages/           # Feature pages
├── context/         # React Contexts
├── hooks/           # Custom hooks
├── utils/           # Utility functions
└── routes.jsx       # Route configuration
```

## ✨ Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark Mode** - Built-in theme switching
- 🧭 **React Router** - Client-side routing
- 📱 **Responsive** - Mobile-first design
- 🎯 **TypeScript Ready** - Easy to migrate

## 🎨 Components

- **Button** - Multiple variants and sizes
- **Input** - Form input with validation
- **Card** - Container with hover effects
- **Navbar** - Sticky navigation bar
- **Sidebar** - Collapsible side navigation

## 📄 Pages

- **Login** - Authentication page
- **Signup** - User registration
- **Dashboard** - Main application view
- **Profile** - User profile management

## 🎨 Theming

The boilerplate uses CSS variables for easy theme customization:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
}
```

Toggle between light and dark mode using the theme switcher in the navbar.

## 🔧 Customization

### Change Colors
Edit `src/index.css` and `tailwind.config.js` to customize the color palette.

### Add Routes
Edit `src/routes.jsx` to add new routes and pages.

### Add Components
Create new components in `src/components/` following the existing patterns.

## 🔧 Customization

This boilerplate is designed to be **extremely easy to customize**! Everything uses Tailwind CSS utility classes.

📖 **[Read the Complete Customization Guide](./CUSTOMIZATION.md)** - Learn how to customize colors, components, layouts, and more!

### Quick Examples:
- Change colors: Edit `src/index.css`
- Modify components: All components use Tailwind classes
- Add new pages: Create in `src/pages/` and add to `src/routes.jsx`
- Customize layouts: Edit files in `src/layouts/`

## 📦 Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- PostCSS

## 🔍 Troubleshooting

### UI Not Styled / Looks Broken?

If your UI appears completely unstyled (no colors, spacing, or layout), you're **missing the PostCSS configuration file**.

**Quick Fix:**
1. Create `postcss.config.js` in your project root:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```
2. Restart your dev server: `npm run dev`

**For detailed troubleshooting**, see the complete guide in your project or check the [conversation history](#).

## 📝 License

MIT

---

Built with ❤️ using React and Tailwind CSS
