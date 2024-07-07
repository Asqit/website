import { type Config } from "tailwindcss";

const cfg: Config = {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // color-5 = base color
        "primary-10": "hsla(173, 70%, 44%, 1)",
        "primary-5": "hsla(173, 70%, 34%, 1)",
        "primary-0": "hsla(173, 70%, 24%, 1)",
        "background-10": "hsla(0, 0%, 12%, 1)",
        "background-5": "hsla(0, 0%, 8%, 1)",
        "background-0": "hsla(0, 0%, 4%, 1)",
        "accent-10": "hsla(173, 70%, 95%, 1)",
        "accent-5": "hsla(173, 70%, 90%, 1)",
        "accent-0": "hsla(173, 70%, 85%, 1)",
        "special-red": "hsla(357, 67%, 44%, 1)",
      },
      keyframes: {
        blink: {
          to: {
            visibility: "hidden",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        float: {
          "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
          "50%": {
            boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-20px)",
          },
          "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
        },
      },
    },
    animation: {
      "fade-in-up": "fadeInUp 1s cubic-bezier(0, 0, 0.2, 1)",
      "fade-in-down": "fadeInDown 1s cubic-bezier(0, 0, 0.2, 1)",
      "fade-in-left": "fadeInLeft 1s cubic-bezier(0, 0, 0.2, 1)",
      "fade-in-right": "fadeInRight 1s cubic-bezier(0, 0, 0.2, 1)",
      float: "float 6s ease-in-out infinite",
      blink: "blink 1s steps(5, start) infinite",
    },
  },
};

export default cfg;
