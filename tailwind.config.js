/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // Phone
      'md': '1024px', // Tablet
      'lg': '1280px', // Desktop
      'xl': '1536px', // Large Desktop
      'iphone': '375px', // iPhone
      'xiami': '360px', // Xiaomi Phone
      'desktop': '1440px', // Desktop
    },
  },
  plugins: [],
}