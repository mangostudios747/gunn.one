/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: '#000000',
      gray: {
        DEFAULT: '#7B869A',
        50: '#F5F7FB',
        100: '#EDF1F8',
        200: '#D5DEEC',
        300: '#B6C0D0',
        400: '#96A1B4',
        500: '#7B869A',
        600: '#606B80',
        700: '#495367',
        800: '#3B4353',
        900: '#2C323F'
      },
      yonder: {
        DEFAULT: '#5679b0',
        100: '#dce3ef',
        200: '#bbc9e0',
        300: '#99aed0',
        400: '#7894c0',
        500: '#5679b0',
        600: '#476491',
        700: '#374e72',
        800: '#283953',
        900: '#182334'
      },
      macaroni: {
        DEFAULT: '#FDBA84',
        100: '#FFE5D1',
        200: '#FFDBBE',
        300: '#FED0AB',
        400: '#FEC598',
        500: '#FDBA84',
        600: '#D0905C',
        700: '#A36633',
        800: '#6E411C',
        900: '#391C04'
      },
      bluebell: {
        DEFAULT: '#A49EC6',
        100: '#F4F3FC',
        200: '#E2DFF4',
        300: '#CFCBEC',
        400: '#BAB5D9',
        500: '#A49EC6',
        600: '#766F9D',
        700: '#473F73',
        800: '#342D5D',
        900: '#211B46'
      },
      pink: {
        DEFAULT: '#EEBEC3',
        100: '#FAEBEC',
        200: '#F7E0E2',
        300: '#F4D5D8',
        400: '#F1CACE',
        500: '#EEBEC3',
        600: '#C17B82',
        700: '#A34D55',
        800: '#71282F',
        900: '#3C060B'
      },
    },
    fontFamily: {
      'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
      'serif': ['DM Serif Text', ...defaultTheme.fontFamily.serif],
      'display': ['DM Serif Display', ...defaultTheme.fontFamily.serif],
      'mono': ['DM Mono', ...defaultTheme.fontFamily.mono],
    },


  },
  plugins: [],
}
