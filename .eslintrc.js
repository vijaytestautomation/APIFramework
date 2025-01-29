module.exports = {
	'env': {
		'node': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'plugins': [
		'import',
		'promise'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab', { SwitchCase: 2 }
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-trailing-spaces':[
			'error',
		],
		'no-multi-spaces':[
			'error',
		],
		'no-irregular-whitespace':[
			'error',
		],
		'no-mixed-spaces-and-tabs':[
			'error',
		],
		'no-multiple-empty-lines':[
			'error',
			{ 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }
		],
		'comma-spacing':[
			'error',
			{ 'before': false, 'after': true }
		],
		'space-infix-ops': [
			'error', { 'int32Hint': false }
		],
		'no-unused-vars':[
			'error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true, 'argsIgnorePattern': '^_' }
		],
		'max-len':[
			'error', { 'code': 130, ignoreComments: true }
		],
		'sort-imports':[
			'error', { 'ignoreCase': true, 'ignoreDeclarationSort': true}
		],
		'import/order':[ 'error', {
			'groups':[
				['builtin','external'],
				'internal',
				['parent','sibling','index']
			],
			'newlines-between':'always'
		}],
		'padding-line-between-statements':[
			'error',
			{'blankLine': 'always', 'prev': ['const','let','var'], 'next': 'block-like'},
			{'blankLine': 'always', 'prev': ['multiline-const','multiline-let','multiline-var'], 'next': '*'}
		],
		'promise/catch-or-return':['error', { 'allowFinally':true }
		],
		'array-bracket-spacing':[
			'error','always'
		],
		'object-curly-spacing':[
			'error','always'
		]
	}
};