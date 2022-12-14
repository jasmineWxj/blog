const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const proxySetting = require('../../src/setProxy');
const { SERVER_HOST, SERVER_PORT } = require('../constant');
module.exports = merge(common, {
    mode: 'development', // 开发
    devtool: 'cheap-module-source-map', // devtool:'inline-source-map',
    devServer: {
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        // port: SERVER_PORT, // 指定端口，默认是8080
        // stats: 'errors-only', // 终端仅打印 error
        // clientLogLevel: 'silent', // 日志等级
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
        proxy: { ...proxySetting },
        // inline: true, //缺少该配置，会出现上面的错误
        historyApiFallback: true, //缺少该配置，会出现上面的错误
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
