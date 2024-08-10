/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular-book': ['CircularStd-Book', 'sans-serif'],
        'circular-medium': ['CircularStd-Medium', 'sans-serif'],
      },
      fontSize: {
        "custom-14": "14px",
        "custom-16": "16px",
        "custom-18": "18px",
        "custom-24": "24px",
        "custom-50": "50px",
        "custom-70": "70px",
      },
      colors: {
        'light-gray': '#E6E8EB',
        'dark-gray': '#6F7177',
        'medium-gray': '#E2E4E7',
        'blue': '#4B40EE',
        'white': '#FFFFFF',
        'navy': '#1A243A',
        'light-gray-text': '#999999',
        'green': '#67BF6B',
        'neutral-gray': '#BDBEBF',
        'very-light-gray': '#EFF1F3',
        'red' : '#D90D1E',
        'red-800':'#991b1b',
        'red-50' : '#fef2f2',

      },
      textUnderlineOffset: {
        20: '20px',
      }
    },
  },
  plugins: [],
}

