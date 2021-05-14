module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],

  // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html  参考 安装babel-plugin-dynamic-import-node
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
