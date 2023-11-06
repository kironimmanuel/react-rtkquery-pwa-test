import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // For smaller projects, we can use the copy-webpack-plugin to copy the entire public dir to the dist folder.
        // new CopyWebpackPlugin({
        //     patterns: [{ from: 'public' }],
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

export default config;
