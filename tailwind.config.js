module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
};
