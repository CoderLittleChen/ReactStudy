const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		proxy.createProxyMiddleware('/api1', {
			target: 'http://localhost:5000', //请求要转发的地址
			changeOrigin: true, //修改request.host的值
			pathRewrite: { '^/api1': '' } //如果请求路径中以 /api1开头 替换为空
		})
	);
};
