import type { Config } from "tailwindcss";
import daisyui from "npm:daisyui";
import { constants } from "./utils/constants.ts";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [daisyui as any],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "hsla(173, 70%, 34%, 1)",
          "secondary": "hsla(357, 67%, 44%, 1)",
          "accent": "hsla(173, 70%, 90%, 1)",
          "neutral": "#3d4451",
          "base-100": "hsla(0, 0%, 8%, 1)",
        },
        light: {
          "primary": "hsla(173, 70%, 34%, 1)",
          "secondary": "hsla(357, 67%, 44%, 1)",
          "accent": "hsla(173, 70%, 90%, 1)",
          "neutral": "#3d4451",
          "base-100": "#e6e6e6",
        },
      },
      ...constants.themes,
    ],
  },
  theme: {
    extend: {
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
        reveal: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
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
      reveal: "reveal",
    },
  },
} as Config;
