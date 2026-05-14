/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#014421',
        'forest-mid':  '#1f6644',
        'earth-green': '#047857',
        'muted-sage': '#6B7F6B',
        'earth-beige': '#C8B89A',
        'charcoal': '#1C1C1E',
        'soft-ivory': '#F5F1EB',
        'champagne-gold': '#C9A96E',
        'off-white': '#F9FAFB',
        // keep existing for backwards compat
        'green-earth': '#047857',
        'green-emerald': '#10b981',
      },
    },
  },
  plugins: [],
};