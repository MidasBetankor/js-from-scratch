const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    mode: "development",
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            }
        ]
    },
    optimization: {
        minimize: true
//            new webpack.optimize.UglifyJsPlugin({
//                sourceMap: true,
//                warnings: false,
//                mangle: true
//            })
        
    }
}


