/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    borderRadius: {
      none: "0px",
      sm: "2px",
      DEFAULT: "4px",
      md: "6px",
      lg: "8px",
      xl: "10px",
      "2xl": "12px",
      "3xl": "16px",
    },
    extend: {
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "10px",
        "2xl": "12px",
        "3xl": "16px",
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
