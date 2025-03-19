import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "plugin:tailwindcss/recommended"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": ["error", { singleQuote: true, semi: false }],
      "no-console": "warn",
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  })
];

export default eslintConfig;
