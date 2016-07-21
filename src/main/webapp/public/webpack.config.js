var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        //'webpack-dev-server/client?http://localhost:3000',
        //'webpack/hot/only-dev-server',
        './src/js/entity.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    /*
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    */
    //devtool : 'inline-source-map',
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ["/src/lib", "node_modules", "bower_components"]
    },

    module: {
        loaders: [
            /*
            {
                test: /.jsx$/,
                loader: 'react-hot!babel',
                include: '/src/js',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /.js$/,
                loader: 'babel',
                include: '/src/js',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
            */
            {
                test: /.js$/,
                loader: 'babel',
                exclude: ["/src/lib", "node_modules", "bower_components"],
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                   //plugins: ['syntax-class-properties']
                }
            }
        ]
    }

    /*
     externals: {
     //don't bundle the 'react' npm package with our bundle.js
     //but get it from a global 'React' variable
     'react': 'React'
     },
     */

};
