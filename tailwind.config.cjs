/** @type {import('https://esm.sh/tailwindcss@3.1.8').Config} */
module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-10": "#1eb09f",
        "primary-5": "#1a9183",
        "primary-0": "#147368",
        "background-5": "#151515",
        "background-10": "#212023",
        "background-0": "#111111",
        "special-red": "#bc252c",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },

          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "12.5%": {
            transform: "translate3d(10px, -10px, 0)",
          },
          "25%": {
            transform: "translate3d(20px, -20px, 0)",
          },
          "37.5%": {
            transform: "translate3d(10px, -10px, 0)",
          },
          "50%": {
            transform: "translate3d(0, 0, 0)",
          },
          "62.5%": {
            transform: "translate3d(-10px, -10px, 0)",
          },
          "75%": {
            transform: "translate3d(-20px, -20px, 0)",
          },
          "87.5%": {
            transform: "translate3d(-10px, -10px, 0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s cubic-bezier(0, 0, 0.2, 1)",
        "float": "float 10s infinite linear",
      },
    },
  },
  plugins: [],
};
