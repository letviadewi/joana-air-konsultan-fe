import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
