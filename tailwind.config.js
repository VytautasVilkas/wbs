// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind scans all files in src/ for utility classes
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-start infinite', // Define the blink animation
      },
      keyframes: { // Fixed typo in "keyframes"
        blink: {
          '0%, 100%': { opacity: '1' }, // Fully visible at the start and end
          '50%': { opacity: '0' }, // Invisible in the middle
        },
      },
    },
  },
  plugins: [], // Plugins if any, otherwise leave it empty
};
