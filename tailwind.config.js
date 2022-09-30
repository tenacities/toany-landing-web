const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'GangwonEduHyeonokT': ['GangwonEduHyeonokT', ...defaultTheme.fontFamily.sans],
        'GangwonEduPowerExtraBoldA': ['GangwonEduPowerExtraBoldA', ...defaultTheme.fontFamily.sans],
        'Pretendard-Regular': ['Pretendard-Regular', ...defaultTheme.fontFamily.sans],
        'adobe': ['adobe-gothic-std', ...defaultTheme.fontFamily.sans],
        'noto-sans': ['Noto Sans KR', '"Noto Sans"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
