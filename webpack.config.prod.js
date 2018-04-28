const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                MODE: "'production'"
            }
        })
    ]
});