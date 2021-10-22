module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0A101F',
    'dark-lighter': '#14213D',
        light: '#F5F5F5',
        'light-darker': '#E5E5E5',
        primary: '#FCA311',
      },
      fontFamily: {
        sans: ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
