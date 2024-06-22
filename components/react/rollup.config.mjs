import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "./index.ts",
  output: [
    {
      name: "ReactComponent",
      file: "./lib/index.js",
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
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
