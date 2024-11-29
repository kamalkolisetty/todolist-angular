
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://kamalkolisetty.github.io/todolist-angular"
  },
  {
    "renderMode": 2,
    "route": "/https://kamalkolisetty.github.io/todolist-angular/about"
  }
],
  assets: new Map([
['index.csr.html', {size: 5018, hash: '769d3cf40aa9cda6e13fc3818fbd0cf32e54d21be1da70f85ec6d9159a0e1343', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1117, hash: '631ea1c7d881900af351862aac0fd6eff380fea2c95338a50737a7d3d59b1996', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 12726, hash: 'b7b7b90c52d861f8562d369807c8aeb4b3fa96d173c988674ff3c1143742e38d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['about/index.html', {size: 12726, hash: 'b7b7b90c52d861f8562d369807c8aeb4b3fa96d173c988674ff3c1143742e38d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)}], 
['styles-DZ6UBGXD.css', {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
