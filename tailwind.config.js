/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: "#FC4A1A", // Vibrant orange-red
          secondary: "#FFD500", // Bright yellow
          accent: "#E4001B", // Deep red
        },
        // Neutral colors with a white-focused palette
        color: {
          1: "#FC4A1A", // Primary brand color
          2: "#FFD500", // Secondary brand color
          3: "#E4001B", // Accent brand color
          4: "#4A90E2", // A complementary blue for additional variety
          5: "#7ADB78", // Keeping the previous green
          6: "#FF98E2", // Keeping the previous pink
        },
        // Stroke colors
        stroke: {
          1: "#252525", // Slightly softened from previous dark color
        },
        // Neutral color palette with more white-based tones
        n: {
          1: "#FFFFFF", // Pure white (base)
          2: "#F5F5F5", // Very light gray
          3: "#E0E0E0", // Light gray
          4: "#BDBDBD", // Medium light gray
          5: "#9E9E9E", // Medium gray
          6: "#757575", // Medium dark gray
          7: "#616161", // Dark gray
          8: "#424242", // Darker gray
          9: "#353535", // Very dark gray
          10: "#2A2A2A", // Almost black
          11: "#1E1E1E", // Near black
          12: "#121212", // Deep black
          13: "#000000", // Pure black
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        code: "var(--font-code)",
        playfair: "var(--font-playfair)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FC4A1A, #FFD500, #E4001B, #4A90E2, #FC4A1A)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-180px * 4 - 4rem * 3))" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slide: "slide 15s linear infinite",
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({})
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
      })
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      })
    }),
  ],
}
