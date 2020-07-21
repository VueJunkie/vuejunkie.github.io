const PrerenderSPAPlugin = require('prerender-spa-plugin');
const JSDOMRender = require('@prerenderer/renderer-jsdom');

const base = {
  assetsDir: 'assets',
  transpileDependencies: [
    "vuetify"
  ],
};

// const pages = {
//   index: {
//     entry: 'src/main.js',
//     template: `public/${process.env.APP_ENV || 'index'}.html`,
//   },
// };


module.exports = process.env.NODE_ENV === 'production' ? {
  ...base,
  // pages,
  configureWebpack: (config) => {
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/', '/posts', '/404'],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: 'prerender',
          }),
        })
      ],
    };
  },
} : {
  ...base,
  // pages
};