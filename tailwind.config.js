/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    borderRadius: {
      none: "0px",
      sm: "4px",
      DEFAULT: "4px",
      md: "4px",
      lg: "4px",
      xl: "4px",
      "2xl": "4px",
      "3xl": "4px",
      full: "9999px",
    },
    extend: {
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "4px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "4px",
        full: "9999px",
      },
      colors: {
        brand: {
          blue: "#2563eb",
          indigo: "#6366f1",
          green: "#22c55e",
          orange: "#f97316",
          purple: "#c084fc",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Kantumruy Pro", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
