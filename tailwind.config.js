/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm Rainforest Earth & Forest Floor Palette
        earth: {
          950: '#120f0d', // warm rich peat/humus black-brown
          900: '#1c1713', // deep warm bark & soil
          850: '#251f1a', // dark chestnut loam
          800: '#322a23', // rich earthy wood
          700: '#483c32', // warm aged wood
          600: '#645447', // cedar tone
        },
        moss: {
          warm: '#4a6741', // olive forest moss
          olive: '#6b8e23', // warm olive moss
          bright: '#52796f', // soft sage botanical
          sage: '#84a98c', // warm botanical foliage
          leaf: '#2d4a22', // deep forest green
        },
        clay: {
          terracotta: '#c86d51', // natural terracotta clay
          rust: '#b85d38', // warm forest ember / rust
          ochre: '#d48c46', // warm golden ochre earth
          amber: '#e59866', // warm sunset amber
          honey: '#f0ad4e', // warm golden honey
          cream: '#fdfbf7', // warm handmade paper / raw canvas
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
