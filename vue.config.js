const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports');

module.exports = {
  publicPath: '/portfolio/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'The Frustrated Dev';
        return args;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join('\n'),
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n'),
      },
    },
  },
};
