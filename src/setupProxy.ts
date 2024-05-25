const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports= function(app:any) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://cyberverdictbackend.onrender.com',
            changeOrigin: true
        })
    )
}