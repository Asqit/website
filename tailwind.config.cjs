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
        "primary-10": "#25d0bc",
        "primary-5": "rgb(30, 168, 152)",
        "primary-0": "rgb(25, 143, 129)",
        "background-0": "#0a151f",
        "background-5": "#0f202f",
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
