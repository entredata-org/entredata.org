import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        dark: colors.neutral,
      }
    },
  },
  plugins: [],
  
} satisfies Config

