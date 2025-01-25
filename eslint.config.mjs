import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['prettier', 'unused-imports'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'clsx', 'cva'],
        config: 'tailwind.config.ts',
      },
      'import/resolver': {
        typescript: {
          extensions: ['.ts', '.tsx'],
        },
      },
      'jsx-a11y': {
        components: {
          Button: 'button',
          Input: 'input',
        },
      },
    },
    rules: {
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'prettier/prettier': ['warn'],
      'import/no-default-export': 'off',
      'import/named': 'off',
      'import/no-cycle': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
    },
    overrides: [
      {
        // TypeScript files only
        files: ['**/*.ts', '**/*.tsx'],
        extends: ['next/typescript'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: './tsconfig.json',
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        rules: {
          '@typescript-eslint/no-misused-promises': [
            2,
            {
              checksVoidReturn: {
                attributes: false,
              },
            },
          ],
        },
      },
      {
        // JavaScript/MJS files
        files: ['**/*.js', '**/*.mjs'],
        parser: 'espree',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
    ],
  }),
]

export default eslintConfig
