const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isDev = argv !== undefined && "mode" in argv ? argv.mode === "development" : true;

    var config = {
        mode: isDev ? 'development' : 'production',
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
            path: isDev ? path.resolve(__dirname, 'dist') : path.resolve(__dirname)
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "src/css", to: "css" },
                    { from: "index.html", to: "." },
                    { from: "images", to: "images" }
                ],
            }),
        ],
        devServer: isDev ? {
            liveReload: true,
            hot: false,
            static: {
                directory: path.resolve(__dirname, 'dist'),
                publicPath: '/dist',
                watch: true,
            }
        } : {}
    };

    return [config];
}