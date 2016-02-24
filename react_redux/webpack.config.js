module.exports = {
    entry: {
        'bundle': './index.js'
    },
    output: {
        path: './',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
