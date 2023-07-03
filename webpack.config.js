const HubSpotAutoUploadPlugin = require("@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ account, autoupload }) => ({
    entry: "./src/index.js",
    output: {
        filename: "js/cli-main.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
        ],
    },

    plugins: [
        new HubSpotAutoUploadPlugin({
            account,
            autoupload,
            src: "dist",
            dest: "tvScientific\ 2022\ Atlas\ Pro/cli-build",
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { from: "src/css/main.css", to: "css" },
                // { from: "src/css/theme-overrides.css", to: "css" },
                // { from: "src/css/legacy", to: "css/legacy" },
                { from: "src/images", to: "images" },

                // { from: "src/js", to: "js" },
                { from: "src/modules", to: "modules" },
                { from: "src/templates", to: "templates" },
                { from: "src/layouts", to: "layouts" },
                { from: "src/partials", to: "partials" },
                { from: "src/sections", to: "sections" },
                // { from: "src/system", to: "system" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "css/styles.css",
        }),
    ],
});
