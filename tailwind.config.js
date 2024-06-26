/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#011F4B",
        "interactive": "#EBF3FE",
        "appBorder": "#B4D4FF",
        "appWhite": "#FDFDFE",
        "grayHover": "#DEE5F3"
      }
    },
  },
  plugins: [],
}

