import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "node_modules",
    ]),
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
            prettier,
        },
        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^react", "^next", "^next/"],
                        // 2. External packages
                        ["^@?\\w"],
                        // 3. Internal aliases (@/ or custom paths)
                        ["^(@|@src)(/.*|$)"],
                        // 4. Relative imports up to parent
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // 5. Relative imports in same folder
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // 6. Style files
                        ["^.+\\.s?css$"],
                    ],
                },
            ],
            "simple-import-sort/exports": "error",
            "prettier/prettier": [
                "warn",
                {
                    endOfLine: "auto",
                },
            ],
        },
    },
]);

export default eslintConfig;
