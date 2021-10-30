const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports');

module.exports = {
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
