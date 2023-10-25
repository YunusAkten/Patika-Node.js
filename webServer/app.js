const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {   res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("<h1>Merhaba</h1>");
        res.write("<h2>Anasayfaya Hoşgeldiniz</h2>");
        res.end();
    }
    else if(url==="hakkimda")
    {
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("<h2>Hakkımda Sayfasına Hoşgeldiniz</h2>");
        res.end();
    }
    else if(url==="/iletisim")
    {
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz</h2>");
        res.end()
    }
    else
    {   res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("<h2>Sayfa Bulunamadı</h2>");
        res.end();
    }

}
);
const port=5000 ;
server.listen(port,()=>{
    console.log("Server dinleniyor");
});