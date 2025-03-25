
export default {
  basePath: 'https://davidlizhonghuang.github.io/browser',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
