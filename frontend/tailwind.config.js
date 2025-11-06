/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#E85C2C',
        'brand-teal': '#2CA6A4',
        'brand-charcoal': '#333333',
        'brand-warm-sand': '#F4E3D7',
        'brand-accent-gold': '#F2B705',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Lora', 'serif'],
        cta: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
