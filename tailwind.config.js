/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      colors: {
        'lightgreen': '#CCEBBB',
        'lightyellow': '#FCF3BB',
        'yellow': '#F5D61D',
        'green': '#82C66A',
        'lightergreen': '#E6F4E1',
        'grey': '#6D6363',
        'lightgrey': '#E5E5E5',
        'red': '#B54B0F',
        'deepgreen': '#4FBB1C',
        'deepyellow': '#FBFF34',
      },
    },
  },
  plugins: [],
};
