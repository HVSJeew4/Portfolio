/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#121826',
        accent: '#5B7CFF',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(14, 20, 36, 0.45)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(91,124,255,0.22), transparent 42%), radial-gradient(circle at 20% 25%, rgba(130,80,255,0.16), transparent 35%)',
      },
    },
  },
  plugins: [],
}
