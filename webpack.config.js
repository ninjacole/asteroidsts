const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/Game.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'gamebundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/css", to: "css" },
                { from: "src/index.html", to: "." }
            ],
        }),
    ],
    devServer: {
        liveReload: true,
        hot: false,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/dist',
            watch: true,
        }
    }
}