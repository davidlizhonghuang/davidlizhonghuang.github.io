
export default {
  basePath: 'https://davidlizhonghuang.github.io/EmployeeUI',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
