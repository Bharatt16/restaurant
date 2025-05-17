const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, 'dist'),
        clean : true,
    },
    mode : 'development',
    devtool : "eval-source-map",
    devServer : {
        static : './dist',
        open: true,
        watchFiles : ["./src/template.html"],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/template.html',
        }),
    ],
    module : {
        rules : [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff2?|ttf|otf|eot)$/,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext]',
            },
          },
        ],
    },
};