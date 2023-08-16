//---------------------------------------------------------------------------------------------------------------------------//
// WEBPACK:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar Webpack como dependencia de desarrollo:
npm install webpack webpack-cli --save-dev

// Agregar al archivo package.json el parametro private:
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

// Transpilar con Webpack:
npx webpack --config webpack.config.js
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// WEBPACK 5+ (Polyfill):
//---------------------------------------------------------------------------------------------------------------------------//
// PLUGIN SOLUTION:
//Instalar node-polyfill-webpack-plugin:
npm install node-polyfill-webpack-plugin --save-dev

//Importar node-polyfill-webpack-plugin:
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

//Setear node-polyfill-webpack-plugin:
module.exports = {
  // ...
  plugins: [new NodePolyfillPlugin()],
}

// FALLBACK SOLUTION:
// Otro camino para evitar los errores de polyfill es usar la propiedad 'resolve fallback'
// con los elementos que estén generando error durante la transpilación.
module.exports = {
    //...//
    resolve	: {
		fallback : {
			"querystring": false,
			"canvas": false,
			"tls": false,
			"net": false,
			"dns": false,
			"child_process": false,
		
			fs		: require.resolve('browserify-fs'),
			http	: require.resolve("stream-http"),
			https	: require.resolve("https-browserify"),
			os		: require.resolve("os-browserify/browser"),
			crypto	: require.resolve("crypto-browserify"),
			stream	: require.resolve("stream-browserify"),
			zlib	: require.resolve("browserify-zlib"),
			vm		: require.resolve("vm-browserify"),
		}
	}
}

//Instalar browserify-fs para resolver dependencia de fs:
npm install browserify-fs --save-dev
//---------------------------------------------------------------------------------------------------------------------------//
