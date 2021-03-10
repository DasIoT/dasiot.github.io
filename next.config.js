const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (config) => ({
    ...config,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        try {
            config.externals.cesium = "Cesium";
        } catch {
            config.externals = {
                cesium: "Cesium",
            };
        }

        if (isServer) {
            config.plugins.push(new CopyWebpackPlugin({
                patterns: [{
                    from: path.join(__dirname, (dev ?
                        "node_modules/cesium/Build/CesiumUnminified/" :
                        "node_modules/cesium/Build/Cesium/")),
                    to: path.join(__dirname, "public/Cesium"),
                },]
            }));
        }
        // config.plugins.push(new HtmlWebpackPlugin({}));
        config.plugins.push(new webpack.DefinePlugin({
            CESIUM_BASE_URL: JSON.stringify("cesium"),
        }));
        // config.plugins.push(new HtmlTagsPlugin({
        //     append: false,
        //     tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
        //   }));
        return config;
    }
});