const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    var config = {
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
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            filename: 'gamebundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [ 
            new CopyPlugin({
                patterns: [
                    { from: "src/css", to: "css" },
                    { from: "index.html", to: "." },
                    { from: "src/images", to: "images" },
                    { from: "src/sounds", to: "sounds" }
                ],
            })
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
    };

    return [config];
}