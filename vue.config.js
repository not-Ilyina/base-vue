// vue.config.js
const { ModuleFederationPlugin } = require('webpack').container;
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8085',

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "home", // 模块名称
        filename: "remoteEntry.js",
        exposes: { // 对外暴露的组件
          './HelloWorld': './src/components/HelloWorld.vue'
        },
      })
    ],
    target: 'web',
  },

  devServer: {
    port: 8085,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
});
