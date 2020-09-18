const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
    name: 'Particles Theme',

    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: './assets/js/main.js'
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    outputPath: './assets/images',
                    publicPath: '../images',
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './assets/css/main.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, 'theme'),
                    from: '**/*.hbs',
                    to: path.resolve(__dirname, 'bin'),
                }
            ],
        }),
    ]
}

module.exports = merge(commonConfig, config);