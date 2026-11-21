/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#07080b',
          subtle: '#0c0e14',
          card: '#12151e',
          'card-hover': '#181d2a',
          devx: '#1e1f24',
        },
        lime: {
          neon: '#c8ff00',
          glow: 'rgba(200, 255, 0, 0.25)',
        },
        coral: {
          devx: '#EA9271',
          glow: 'rgba(234, 146, 113, 0.25)',
        },
        cyan: {
          neon: '#00f0ff',
          devx: '#8DD5D6',
        },
        violet: {
          neon: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'sweep': 'sSweep 4s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'laser-scan': 'laserScan 2.5s ease-in-out infinite',
      },
      keyframes: {
        sSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(200, 255, 0, 0.7)' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8', boxShadow: '0 0 0 8px rgba(200, 255, 0, 0)' },
        },
        laserScan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '96%' },
        }
      },
      backdropBlur: {
        glass: '20px',
      }
    },
  },
  plugins: [],
}
