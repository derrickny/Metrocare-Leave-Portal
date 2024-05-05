const flowbite = require('flowbite/plugin');

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Your project's source files
    './public/index.html',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Path to Flowbite React components
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1873b9',
      },
    },
  },
  plugins: [ // Assuming you might use this for typography
    flowbite, // Correctly add the Flowbite plugin
  ],
}