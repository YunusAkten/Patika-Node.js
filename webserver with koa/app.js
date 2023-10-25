const Koa = require('koa');
const app = new Koa();
// response
app.use(ctx => {
    if(ctx.request.url==='/'){
        ctx.body = '<h1>Merhaba</h1> ';
        ctx.body+="<h2>Anasayfaya Hoşgeldiniz</h2>";}
    else if(ctx.request.url==='/hakkimda')
    ctx.body="<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>";
    else if(ctx.request.url==='/iletisim')
    ctx.body="<h1>İletişim Sayfasına Hoşgeldiniz</h1>";
    else{
        ctx.status=404;
        ctx.body="<h1>Sayfa Bulunamadı</h1>";
    }
});

app.listen(3000);