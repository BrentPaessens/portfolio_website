module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#4DD9C0',
          dark: '#3ac4ad',
        },
        coral: {
          DEFAULT: '#FF7F65',
        },
        navy: {
          DEFAULT: '#1E2235',
          light: '#252a40',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}