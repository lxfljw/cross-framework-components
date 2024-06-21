import typescript from "@rollup/plugin-typescript";
import sucrase from "@rollup/plugin-sucrase";
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "./index.ts",
  output: {
    name: "ReactComponent",
    file: "./dist/index.js",
    format: "umd",
    globals: {
      react: "React",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript(),
    // resolve({
    //   extensions: [".js", ".ts"],
    // }),
    // sucrase({
    //   exclude: ["node_modules/**"],
    //   transforms: ["typescript"],
    // }),
  ],
};
