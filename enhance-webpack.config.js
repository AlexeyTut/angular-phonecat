const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const oldSourcePath = path.resolve(__dirname + '/old', 'src');

module.exports = (cfg, opt) => {
	//includes styles from old project as global
	cfg.module.rules
		.filter(rule => rule.test.toString().includes('less') || rule.test.toString().includes('css'))
		.forEach(rule => {
			if (rule.include) {
				// rule.include.push(oldSourcePath)
			}
		})

	//html loader for angularjs templates
	cfg.module.rules.push(
		{
			test: /\.html$/,
			use: [
				{loader: 'html-loader', options: {attributes: false}}
			]
		}
	)

	//replacement for less constants
	// cfg.module.rules.unshift({
	// 	test: /constants[\\\/]constants\.ts$/,
	// 	loader: 'string-replace-loader',
	// 	options: {
	// 		multiple: [
	// 			{
	// 				search: '\'labworksLessVariables\'',
	// 				replace: getLessConstants()
	// 			}
	// 		]
	// 	}
	// })

	// strict angularjs di
	cfg.module.rules.unshift({
		test: /\.m?(ts|js)$/,
		exclude: /(node_modules|bower_components)/,
		use: [{
			loader: 'babel-loader',
			options: {
				"presets": ["@babel/preset-env"],
				"plugins": ["angularjs-annotate"]
			}
		}]
	})

	cfg.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

	cfg.plugins.push(new webpack.ProvidePlugin({
		_: 'lodash',
		'window.jQuery': 'jquery',
		'$': 'jquery',
		"jQuery": "jquery",
		'moment': 'moment-timezone',
		'd3': 'd3',
		'c3': 'c3-labworks',
		'average': 'moving-averages',
		'regression': 'regression',
		'jschardet': 'jschardet'
	}))

	return cfg
}

function getLessConstants() {
	const src = oldSourcePath + '/app/less/constants.less'
	const file = fs.readFileSync(src).toString()
	//todo think about functions and expressions in constants
	const constants = file
		.replace(/(\/\*[^*]*\*\/)|(\/\/[^*]*)/g, '') //removes comments
		.split(';')
		.reduce((obj, item) => {
			const variable = item.trim().split(':')

			if (variable.length === 2) {
				const variableName = variable[0].trim()

				if (variableName[0] !== '@') {
					return obj
				}

				if (variable[1].indexOf('px') !== -1) {
					obj[variableName.substr(1)] = parseInt(variable[1].trim())
				} else {
					obj[variableName.substr(1)] = variable[1].trim()
				}
			}

			return obj
		}, {})

	return JSON.stringify(constants)
}


