const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //检查命名规范

    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'https://bookshelf.goodideas-studio.com',
            }
        }
    },

    //domain 設定
    publicPath: process.env.NODE_ENV === 'production' ? '/valeno_vue/dist' : '/'
})