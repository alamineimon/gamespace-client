/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gaming: "'Black Ops One', cursive",
    },
    extend: {
      colors: {
        mainHeading: "#ffffff",
        textP: "#cacaca",
        bg1: "#1C2532",
        bg2: "#000000",
        navLinks: "#ffffff",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FA8072",

          secondary: "#1A1B1F",

          accent: "#FA8072",

          neutral: "#141320",

          "base-100": "#1C2532",

          info: "#488CCB",

          success: "#15B77E",

          warning: "#F59A38",

          error: "#EE4744",

          "--rounded-box": "0",
          "--rounded-btn": "0",
        },
      },
    ],
  },
};
