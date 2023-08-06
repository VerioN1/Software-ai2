module.exports = {
	env: {
		'browser': true,
		'amd': true,
		'node': true
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json'
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		"function-paren-newline": "off",
		"implicit-arrow-linebreak": "off",
		'import/extensions': 'off',
		"no-spaced-func": "off",
		'@typescript-eslint/indent': ['off'],
		'no-tabs': ['off'],
		'indent': ['off'],
		'no-mixed-spaces-and-tabs': ['off'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		"react/prop-types": "off" ,
		"react/require-default-props": "off",

		'@typescript-eslint/comma-dangle': ['off'],
		'comma-dangle': ['off'],
		'import/prefer-default-export': 'off',
		'max-len': ['error', { 'code': 160, 'ignoreUrls': true }],

		'object-curly-newline': ['off'],
		'react/react-in-jsx-scope': ['off'],
		"react/jsx-wrap-multilines": "off",
		'@typescript-eslint/no-throw-literal': ['off'],
		'react/jsx-uses-react': ['off'],
		"@typescript-eslint/naming-convention": "off",
		"no-underscore-dangle": "off",
		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "prev": "if", "next": "*" },
			{ "blankLine": "always", "prev": "*", "next": "if" },
			{ "blankLine": "always", "prev": "multiline-const", "next": "*" },
			{ "blankLine": "always", "prev": "*", "next": "multiline-const" },
			{ "blankLine": "always", "prev": "*", "next": "try" },
			{ "blankLine": "always", "prev": "*", "next": "switch" },
		],
		'prettier/prettier': ['error', {
			'newline-per-chained-call': false,
			'trailingComma': 'none',
			'semi': true,
			'singleQuote': true,
			'printWidth': 160,
			'tabWidth': 4,
			"endOfLine": "auto",
			'useTabs': true,
			'prettier.tslintIntegration': true
		}],
		"newline-per-chained-call": ["off"],
		'react/jsx-props-no-spreading': ['warn'],
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		'react/no-unescaped-entities': ['warn']
	}
};
