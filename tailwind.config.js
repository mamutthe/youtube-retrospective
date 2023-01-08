/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [ require('flowbite/plugin')],
  safelist:[
    "before:orange-gradient",
    "before:blue-gradient",
    "before:purple-gradient"
  ]
}
