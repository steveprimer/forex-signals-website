/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customgray: "#0c0c0cff", // your true grey
        "card-bg": "#F0F0F0",
      },
      boxShadow: {
        // Defines a soft, spread-out shadow to match your image
        "soft-glow": "0px 8px 32px rgba(0, 0, 0, 0.3)",
        "softer-glow":
          "0 0 25px rgba(255, 255, 255, 0.1), 0 0 10px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
