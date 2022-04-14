const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //开启代理服务器
  //第一种配置
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  //第二种配置
  // devServer: {
  //   proxy: {
  //     '/atguigu': {
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/atguigu':''},
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     '/demo': {
  //       target: 'http://localhost:5001',
  //       pathRewrite:{'^/demo':''},
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }
});


