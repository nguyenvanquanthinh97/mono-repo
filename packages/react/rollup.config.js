import Ts from "rollup-plugin-typescript2";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.ts",
    "src/atoms/Text/index.ts",
  ],
  output: {
    dir: "lib",
    format: "esm", // For export import syntax es-syntax
    sourcemap: true, // For easily debugging
    preserveModules: true, // Preserve the structure of source folder
  },
  // going to compile the typescript
  plugins: [Ts()],
  external: ["react", "@ds.e/foundation"],
};
