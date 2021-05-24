module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('http://charity-is-hope-html.themerex.net/images/slider_1_2.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
