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
        'aura': {
          white: '#FEFEFE',
          lavender: '#E6E1F0',
          sand: '#F5F1E8',
          green: '#E8F5E8',
          gold: '#F9F5E7',
          dark: '#2A2A2A',
          mist: '#F8F6FF',
          crystal: '#FFFFFF80'
        }
      },
      fontFamily: {
        'geometric': ['Inter', 'system-ui', 'sans-serif'],
        'spiritual': ['Playfair Display', 'serif']
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'aura-glow': 'auraGlow 8s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        auraGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' }
        }
      }
    },
  },
  plugins: [],
}