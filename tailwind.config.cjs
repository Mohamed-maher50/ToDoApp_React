/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "Roboto",
    },
container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '9rem',
        '2xl': '10rem',
      },
    },

    extend: {
      backgroundImage: {
        todo: "url('https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors: {
        mainBlue: "#2f74c0",
        primary:"#121215",
        secandary:"#744CF7",
        lightSecandary:"#8D8FD2",
        card:"#18181C",
        body:"#2f2d36"
      },
      boxShadow: {
        circle: "0px 0px 17px 1px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
