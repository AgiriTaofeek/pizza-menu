/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //Overwrite tailwind style
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        //This overwrites the default tailwind screen property because we used the same name screen despite setting it in the extend object
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
