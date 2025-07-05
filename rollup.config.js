import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    plugins: [typescript()],
    input: "src/index.ts",
    output: {
        plugins: [terser()],
        dir: "dist",
        format: "es",
        sourcemap: true,
    }
}
