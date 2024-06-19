import typescript from "@rollup/plugin-typescript";
import sucrase from "@rollup/plugin-sucrase";
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "./index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
    globals: {
      react: "React",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript(),
    // resolve({
    //   extensions: [".js", ".ts", ".tsx", ".jsx"],
    // }),
    // sucrase({
    //   exclude: ["node_modules/**"],
    //   transforms: ["typescript"],
    // }),
  ],
};
