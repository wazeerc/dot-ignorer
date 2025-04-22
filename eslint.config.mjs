import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [{
    files: ["**/*.ts"],
}, {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",
    },

    rules: {
        // TypeScript specific rules
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
        {
            selector: "function",
            format: ["camelCase"],
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        }],
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/consistent-type-imports": "warn",

        // Code style and formatting
        "curly": "warn",
        "eqeqeq": "warn",
        "no-throw-literal": "warn",
        "semi": "warn",
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "double", { "avoidEscape": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "no-multiple-empty-lines": ["warn", { "max": 1 }],
        "arrow-parens": ["warn", "always"],
        "no-console": "warn",

        // Best practices
        "no-var": "error",
        "prefer-const": "warn",
        "no-duplicate-imports": "warn",
        "sort-imports": ["warn", { "ignoreDeclarationSort": true }],
        "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        "object-curly-spacing": ["warn", "always"],
    },
}];