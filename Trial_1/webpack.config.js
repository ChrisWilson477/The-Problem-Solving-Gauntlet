const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './public',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
