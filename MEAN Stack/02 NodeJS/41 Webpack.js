// Install Webpack:
npm install webpack webpack-cli --save-dev

//Agregar al archivo package.json el parametro private:
//"main": "index.js",
"private":true,
//"scripts": { ... }

// Contenido del archivo 'webpack.config.js':
const path = require('path');

module.exports = {
    mode    : 'production', // development
    entry	: './index.js',
	output	: {
	    filename    : 'index.js',
		path        : path.resolve(__dirname, 'dist')
	}
}

// Build with Webpack:
npx webpack --config webpack.config.js
