/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primario: '#0f2748', // azul oscuro principal
        secundario: '#1f8ea4', // acento turquesa
        arena: '#f5efe6',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
