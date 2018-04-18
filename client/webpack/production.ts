/*------------------------------------------------------------------------------
 *  Copyright (C) SME Virtual Network contributors. All rights reserved.
 *  See LICENSE in the project root for license information.
 *----------------------------------------------------------------------------*/

// Configuration for production.

import { resolve } from "path";

const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    mode: "production",
    entry: "./scripts/application.ts",
    output: {
        filename: "js/bundle.[hash].min.js",
        path: resolve(__dirname, "../../smevirtual/static/dist"),
        sourceMapFilename: "js/bundle.[hash].map"
    },
    devtool: "source-map",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    comments: false,
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
    ],
});
