module.exports = {
	entry : {
		app : './src/index.js'
	},
	output : {
		path : './build',
		filename : 'bundle.js',
		publicPath : '/build/'
	},
	resolve : {
		extensions : ['', '.js']
	},
	devServer : {
		host : '192.168.100.125',
		port : 8080,
		inline : true
	},
	module : {
		loaders : [
			{
				test : /(\.js|.jsx)$/,
				loader : 'babel',
				exclude : '/node_modules/',
				query : {
					presets : ['es2015']
				}
			}
		]
	}
}