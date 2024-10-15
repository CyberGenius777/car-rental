/** @type {import('prettier').Config} */

module.exports = {
  arrowParens: 'always',
  printWidth: 120,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.md'],
      options: {
        parser: 'markdown',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
  ],
}
