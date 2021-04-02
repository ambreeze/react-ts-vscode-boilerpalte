module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:react/recommended',
		'react-app',
		'plugin:jsx-a11y/recommended',
	],
	rules: {
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-throw-literal': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	],
};
