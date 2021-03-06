module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-orange': '#F7D6B8',
        'light-blue': '#3B3660',
        'dark-gray-text': '#B7B5B5',
        'blue-text': '#060335',
        'gray-text': '#F9F6F4',
        'gray-dif-text': '#9B757A',
        'dark-text': '#000000', /*4A4A4A*/
        'orange-text': '#F3A65D',
        'yellow-text': '#F6C585',
        'red-text': '#A74E43',
        'off-red-text': '#B45D47',
        'button-gray':'#BCC5D2',
      }
    },
  },
  screens: {
    'xsm': '520px',
    // => @media (min-width: 520px) { ... }

    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    '2lg': '1148px',
    // => @media (min-width: 1148px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
