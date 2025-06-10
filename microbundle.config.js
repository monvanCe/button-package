const postcss = require('rollup-plugin-postcss');

module.exports = {
  plugins: [
    postcss({
      modules: true,
      extract: true,
    }),
  ],
};
