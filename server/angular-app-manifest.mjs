
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidlizhonghuang.github.io/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23615, hash: '70093590d1bf367dacb23258aad7d81b85f741203515617670db125a40ff2f3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17189, hash: 'f3e625c76ab9d1c9dc29f79c2217af04f4c9e592b57265cd3f17e6318bb76084', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24460, hash: '99d94b80b2085fb98e240f25f67c6a317165c4d40af76eac21e8a83b65fda12d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
