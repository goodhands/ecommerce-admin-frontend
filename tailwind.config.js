module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor:{
        'primary': '#333',
      },
      borderWidth:{
        '1': '1px'
      },
      fontFamily:{
        'body': ['Montserrat', 'sans-serif'],
        'heading': ['Libre Baskerville', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
