var path = require('path');

module.exports = {
    entry: {
        "js/main": './src/ts/Main.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.ts', '.js']
    },
    module: {
        rules: [
            // ---------- TypeScript
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};