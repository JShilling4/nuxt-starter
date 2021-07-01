module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
	plugins: [],
	// add your custom rules here
	rules: {
		'no-tabs': 0,
		'vue/html-indent': 0,
		'vue/html-self-closing': 'off',
        indent: 0
	}
}
