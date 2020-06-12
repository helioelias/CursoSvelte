module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      './public/index.html',
      './src/**/*.svelte'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
