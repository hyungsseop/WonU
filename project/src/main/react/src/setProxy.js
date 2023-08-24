// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8080',	// 서버 URL
      changeOrigin: true,
    })
  );
};