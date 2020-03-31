// Generate time of app build
const getBuildDate = () => {
  const now = new Date();
  return `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear().toString()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

process.env.VUE_APP_VERSION = require('./package.json').version;

process.env.VUE_APP_BUILD_TIME = getBuildDate();

module.exports = {
  lintOnSave: false,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg').test(/\.svg?$/);
    svgRule.uses.clear();
    svgRule
      .use('raw-loader')
      .loader('raw-loader');
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/helpers.scss";',
      },
    },
  },
};
