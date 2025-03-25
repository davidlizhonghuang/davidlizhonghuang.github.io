
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidlizhonghuang.github.io/EmployeeUI',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EmployeeUI"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23617, hash: 'f4b1aa9a2da30b1ffc9dab416401480ac9046e8ebd49876c33b34ed655e87c3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17191, hash: 'd2ed112855c2c2e0b276c77a2de7d31e545277a9e612915b7565ed2fbfff2e78', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24462, hash: 'a391faa31972fdda8edefac975d63178bc54817462955210f9a934994d9fbf51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
