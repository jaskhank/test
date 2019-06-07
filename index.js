const Koa = require('koa');
const app = new Koa();

(async() => {

    app.use(async (ctx) => {
        ctx.body = {
            ip: ctx.request.ip,
            headers: ctx.request.headers
        };
    });

    app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
        console.log("Ready");
    });

})();