import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import cssnano from "cssnano";
import cssnext from "postcss-cssnext";
import nested from "postcss-nested";
import simplevars from "postcss-simple-vars";
import css from "rollup-plugin-css-only";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      exports: "named",
      sourcemap: true,
    },
    {
      format: "es",
      file: packageJson.module,
      exports: "named",
      sourcemap: true,
    },
  ],
  external: [
    "react",
    "react-dom",
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
  plugins: [
    css({ output: "bundle.css" }),
    simplevars(),
    nested(),
    cssnext({ warnForDuplicates: false }),
    cssnano(),
    resolve(),
    external(),
    commonjs({
      include: ["node_modules/**"],
    }),
    typescript({
      clean: true,
      exclude: ["node_modules"],
    }),
    postcss(),
  ],
};
