
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(245.9deg, #219580 14.52%, #346079 84.54%)'
      }
    }
  },
  plugins: []
} satisfies Config
