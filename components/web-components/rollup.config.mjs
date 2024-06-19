/** @type {import('rollup').RollupOptions} */
export default {
  input: ["./input/index.js"],
  output: {
    dir: "./dist",
    format: "es",
  },
};
