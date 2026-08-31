import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "dist/**", ".tanstack/**", "next-env.d.ts"]),
]);

export default eslintConfig;
