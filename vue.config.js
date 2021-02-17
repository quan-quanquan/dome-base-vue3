module.exports = {
  css: {
    modules: false,
    loaderOptions: {
      less: {
        lessOptions: {
          strictMath: true,
          noIeCompat: true
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}
