import resolve from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "./index.ts",
  output: [
    {
      name: "ReactComponent",
      file: "./dist/index.js",
      format: "umd",
      globals: {
        react: "React",
      },
    },
    {
      name: "ReactComponent",
      file: "./es/index.js",
      format: "es",
      globals: {
        react: "React",
      },
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [resolve(), babel({ extensions: [".ts", ".tsx", ".js", ".jsx"] })],
};
