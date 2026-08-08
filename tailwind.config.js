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
        brand: {
          obsidian: '#08080a',
          dark: '#0c0c0e',
          card: '#0d0d10',
          cardMuted: '#121215',
          border: 'rgba(255, 255, 255, 0.05)',
          borderMuted: 'rgba(255, 255, 255, 0.09)',
        },
        // Accent color (Electric Indigo as default, can be overridden per discipline filter)
        accent: {
          DEFAULT: '#6366f1',
          glow: 'rgba(99, 102, 241, 0.05)',
          web: {
            DEFAULT: '#6366f1',
            glow: 'rgba(99, 102, 241, 0.05)',
          },
          android: {
            DEFAULT: '#10b981',
            glow: 'rgba(16, 185, 129, 0.05)',
          },
          design: {
            DEFAULT: '#f43f5e',
            glow: 'rgba(244, 63, 94, 0.05)',
          },
          systems: {
            DEFAULT: '#fbbf24',
            glow: 'rgba(251, 191, 36, 0.05)',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'premium': '0 8px 32px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
