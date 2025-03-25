
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidlizhonghuang.github.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23606, hash: '7c11ca39cde3a54e3b1e9b4c65a45f5c8c8e5912d3678098d3728d96b85320c4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17180, hash: 'd7f4e2feb0a2fbcdfe77ddd9e90878ba4a13ffa5144d64a55d061bc638f41505', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24451, hash: '535f26d2fb029099fc6d2d0550b4efbff7313fce065978cc5f9f9708a7b67f92', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
