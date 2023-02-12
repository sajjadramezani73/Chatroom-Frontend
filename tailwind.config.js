/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const customColors = {
  primary: '#0081B4',
  primaryLight: '#059bd6',
  caption: '#495057',
  captionLight: '#797c8c',
  // captionDark: '#6C6C6C',
  danger: '#FF3B3B',
  light: '#e6e5e5',
  black: '#111111',
  body: '#181818',
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    colors: {
      ...colors,
      ...customColors
    },
    fontSize: {
      'xxs': '.75rem',
      'xs': '.8125rem',
      'sm': '.875rem',
      'tiny': '.9375rem',
      'base': '1rem',
      'md': '1.0625rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      'title': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4/3xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      boxShadow: {
        'card': '0px 0px 10px rgba(90, 75, 75, 0.1), 0px 1px 1px rgba(90, 75, 75, 0.03), 0px 2px 3px rgba(90, 75, 75, 0.04)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ':root': {
          ...mapColors(customColors)
        }
      });
    })
  ],
}

const mapColors = (colors) => {
  let object = {};
  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}

