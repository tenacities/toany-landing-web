const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'adobe': ['adobe-gothic-std', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
