module.exports = {
  mode: "jit",
  purge: ['./home.html'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          300: '#204321',
          200: '#006508',
          100: '#00f403',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}