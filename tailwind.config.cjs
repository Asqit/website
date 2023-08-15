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
        "background-0": "#131f2a",
        "background-5": "#132434",
        "background-10": "#142a3e",
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
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        rotateSphere: {
          from: {
            rotate: "0deg",
          },
          "50%": {
            scale: "1 1.25",
          },
          to: {
            rotate: "360deg",
          },
        },
        rotate: {
          from: {
            rotate: "0deg",
          },
          to: {
            rotate: "360deg",
          },
        },
        blink: {
          "from, 50%": {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0, 0, 0.2, 1)",
        "fade-in-up": "fadeInUp 1s cubic-bezier(0, 0, 0.2, 1)",
        "sphere-rotate": "rotateSpheres 20s infinite",
        "rotate": "rotate 1s infinite cubic-bezier(0, 0, 0.2, 1)",
        "blink": "blink 1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
