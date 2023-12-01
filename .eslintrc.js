const a11y = require('eslint-plugin-jsx-a11y');

const a11yOff = Object.keys(a11y.rules).reduce((acc, rule) => {
	acc[`jsx-a11y/${rule}`] = 'off';
	return acc;
}, {});

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', '@microsoft/power-apps'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
			},
		},
	},
	ignorePatterns: ['**/*.d.ts', '.eslintrc.js', './scripts/*.mjs'],
	rules: {
		...a11yOff,
		'import/extensions': 0,
		'import/prefer-default-export': 'off',
		'import/no-default-export': 2,
		'linebreak-style': 0,
		'class-methods-use-this': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'no-use-before-define': 0,
		'no-console': 0,
		'lines-between-class-members': 0,
		'no-return-await': 0,
		'default-case': 0,
		'no-case-declarations': 0,
		'no-restricted-syntax': 1,
		'no-nested-ternary': 1,
		'no-await-in-loop': 0,
		'no-underscore-dangle': 1,
		'prefer-const': 1,
		'prefer-destructuring': ['error', { object: true, array: false }],
		'consistent-return': 1,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-use-before-define': 2,
		'react/jsx-props-no-spreading': 0,
		'react/destructuring-assignment': 0,
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx', '.jsx'],
			},
		],
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		curly: ['error', 'all'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'react/prop-types': 0,
		'react/require-default-props': 0,
		'react/no-unused-prop-types': 1,
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'import/no-unresolved': [2, { caseSensitive: false }],
	},
};
