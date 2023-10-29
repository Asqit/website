module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-10": "#1eb09f",
        "primary-5": "#1a9183",
        "primary-0": "#147368",
        "background-5-dark": "#151515",
        "background-10-dark": "#212023",
        "background-0-dark": "#111111",
        "special-red": "#bc252c",
        "background-0": "#bfbfbf",
        "background-5": "#e6e6e6",
        "background-10": "#ffffff",
      },
      keyframes: {
        blink: {
          to: {
            visibility: "hidden",
          },
        },
        // Fade-In-Up
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
        // Fade-In-Down
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },

          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        // Fade-In-Right
        fadeInRight: {
          from: {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },

          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        // Fade-In-Left
        fadeInLeft: {
          from: {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },

          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        // Float
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
        "fade-in-down": "fadeInDown 1s cubic-bezier(0, 0, 0.2, 1)",
        "fade-in-left": "fadeInLeft 1s cubic-bezier(0, 0, 0.2, 1)",
        "fade-in-right": "fadeInRight 1s cubic-bezier(0, 0, 0.2, 1)",
        "float": "float 10s infinite linear",
        "blink": "blink 1s steps(5, start) infinite",
      },
    },
  },
  plugins: [],
};
