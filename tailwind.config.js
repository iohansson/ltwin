module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
