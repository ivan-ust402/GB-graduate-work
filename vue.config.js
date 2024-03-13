const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
})




// const webpack = require('webpack')

// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     plugins: [
//       new webpack.DefinePlugin({
//         'VUE_PROD_HYDRATION_MISMATCH_DETAILS': true
//       })
//     ]
//   }
// })
