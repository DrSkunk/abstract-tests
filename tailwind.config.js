module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      stroke: (theme) => ({
        black: theme('colors.black'),
        white: theme('colors.white'),
      }),
      fill: (theme) => ({
        black: theme('colors.black'),
        white: theme('colors.white'),
      }),
      strokeWidth: {
        '1/2': '.5',
      },
      gridTemplateColumns: {
        '3-auto-mincontent-auto': 'auto min-content auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
