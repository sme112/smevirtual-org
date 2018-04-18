/*------------------------------------------------------------------------------
 *  Copyright (C) SME Virtual Network contributors. All rights reserved.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

// Shared configuration for development and production.

import { resolve } from "path";
import { CheckerPlugin } from "awesome-typescript-loader";

const BundleTrackerPlugin = require("webpack-bundle-tracker");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx", ],
    },
    context: resolve(__dirname, "../../client"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "source-map-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                use: ["babel-loader", "awesome-typescript-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            minimize: {
                                discardComments: {
                                    removeAll: true
                                }
                            }
                        }
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
                ],
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new BundleTrackerPlugin( { filename: "./webpack-stats.json" } )
    ],
    externals: {
        "stimulus": "Stimulus",
    },
    performance: {
        hints: false,
    },
};
