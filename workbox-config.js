module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};