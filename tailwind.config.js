// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tsd: {
          blue: '#004AAD',
          orange: '#F9943B',
        },
      },
      fontFamily: {
        garamond: ['Garamond', 'serif'], // add Garamond
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {
      display: ["print"],
      flex: ["print"],
    },
  },
};
