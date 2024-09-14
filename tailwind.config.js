
const {nextui} = require('@nextui-org/theme');
const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,tsx,ts,jsx,tsx}",  // Adjust if needed
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        'border-radius': {
          '0%': { borderRadius: '20% 30% 40% 30%' },
          '15%': { borderRadius: '35% 25% 45% 20%' },
          '35%': { borderRadius: '45% 40% 25% 35%' },
          '60%': { borderRadius: '30% 50% 35% 45%' },
          '85%': { borderRadius: '40% 35% 55% 25%' },
          '100%': { borderRadius: '20% 30% 40% 30%' },
        },
        drop: {
          '0%': { top: '-50%' },
          '100%': { top: '150%' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'border-radius': 'border-radius 12s linear infinite',
        drop: 'drop 7s cubic-bezier(0.4, 0.26, 0, 0.97) infinite forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), nextui()],
};
