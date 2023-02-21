/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gaming: "'Black Ops One', cursive",
      rajdhani: "'Rajdhani', sans-serif",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        mainHeading: "#ffffff",
        textP: "#cacaca",
        bg1: "#1C2532",
        bg2: "#000000",
        navLinks: "#ffffff",
        black1: "#151515",
        white1: "#fff",
        sai: "#BBD0EC",
        gray: "#D0D3D8",

        dashboardCards: "#212D4A60",
      },
      backgroundImage: {
        html5banner:
          "url('https://img.freepik.com/free-psd/funny-game-text-effect_17005-1393.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph')",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFCC00",

          secondary: "#1A1B1F",

          accent: "#FFCC00",

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
