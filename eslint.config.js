import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'
import pluginVitest from 'eslint-plugin-vitest'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
  },

  // конфиг тестовых файлов
  {
    files: ['test/**/*.test.{ts}'],
    plugins: {
      vitest: pluginVitest, // Явное подключение плагина
    },
    languageOptions: {
      globals: {
        ...globals.vitest,
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.vitest.json',
      },
    },
    rules: {
      'no-undef': 'off',
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/no-identical-title': 'error',
    },
  },

  // основные правила
  {
    rules: {
      ...prettierConfig.rules,
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      'no-undef': 'warn',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
]
