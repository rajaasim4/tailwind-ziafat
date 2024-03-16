/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        goldenrod: "#e8c14a",
        darkslategray: "#292c2d",
        darkgoldenrod: "#b58f17",
        gray: {
          "100": "#7d7d7d",
          "200": "rgba(255, 255, 255, 0.82)",
        },
        dimgray: {
          "100": "#5c5e61",
          "200": "rgba(92, 94, 97, 0.09)",
        },
        floralwhite: "#fff9ec",
        red: "#ff1200",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "8xl": "27px",
        "26xl": "45px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
