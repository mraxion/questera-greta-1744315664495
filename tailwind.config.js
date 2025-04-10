/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        secondary: '#E5E7EB',
        success: '#34D399',
        text: '#1F2937',
      },
      fontSize: {
        base: '18px',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      spacing: {
        'safe-area': 'env(safe-area-inset-bottom, 0px)',
      },
      borderRadius: {
        xl: '1rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}