/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta Comex Personalizada
        'glucosa': '#EADDCA',  // Fondo Crema Suave
        'basenji': '#8C4B34',  // Terracota (Acento Botones)
        'mensajero': '#A3B3B8', // Gris Azulado (Fondos secundarios)
        'argos': '#2F404F',    // Azul Profundo (Texto y Navbar)
        'blanco': '#FFFFFF'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}