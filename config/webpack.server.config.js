const nodeExternals = require('webpack-node-externals');
const resolve = require('path').resolve;

module.exports = {
    entry: resolve('src/server'),
    target: 'node',
    mode: 'development',
    output: {
        path: resolve('dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: [
                'babel-loader', 'ts-loader'
            ]
        }]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.ts'],
        descriptionFiles: ['package.json'],
        modules: [
            resolve('node_modules'),
            'node_modules'
        ]
    }
};