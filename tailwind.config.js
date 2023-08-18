/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#00338c",
        black: "#000",
        lightgray: "#d4d4d4",
        whitesmoke: "#f3f3f3",
        gray: {
          "100": "#8d8a8a",
          "200": "#7d7d7d",
          "300": "#050505",
          "400": "rgba(0, 0, 0, 0.74)",
          "500": "rgba(0, 0, 0, 0.85)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        thistle: "#d4c1e7",
        gainsboro: {
          "100": "#e0dfdf",
          "200": "#d7e5df",
          "300": "#dbdbdb",
        },
      },
      fontFamily: {
        outfit: "Outfit",
        roboto: "Roboto",
        ranga: "Ranga",
        "dm-sans": "'DM Sans'",
        "space-mono": "'Space Mono'",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      "47xl": "66px",
      "34xl": "53px",
      "29xl": "48px",
      "11xl": "30px",
      "16xl": "35px",
      "25xl": "44px",
      "93xl": "112px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
