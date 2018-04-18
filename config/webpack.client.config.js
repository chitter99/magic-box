const nodeExternals = require('webpack-node-externals');
const resolve = require('path').resolve;

module.exports = {
    entry: resolve('src/client'),
    target: 'web',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        path: resolve('dist'),
        filename: 'client.bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                'babel-loader', 'ts-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.jsx', '.tsx', '.js', '.ts'],
        descriptionFiles: ['package.json'],
        modules: [
            resolve('node_modules'),
            'node_modules'
        ]
    }
};