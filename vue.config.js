const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //關閉检查命名规范
    filenameHashing: false, //關閉打包後的檔名出現雜湊值
    productionSourceMap: false, //壓縮js有XXX.map 是用來看錯誤的可以刪掉

    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'https://bookshelf.goodideas-studio.com',
            }
        }
    },

    //domain 設定
    publicPath: process.env.NODE_ENV === 'production' ?
        '/valeno_vue/dist' : '/'
})