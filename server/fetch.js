var http = require('http');
var url = require('url');
// 创建http服务
var app = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    // 查询本机ip
    var sreq = http.request({
        host:     'music.163.com', // 目标主机
        path:     pathname, // 目标路径
        method:   req.method, // 请求方式
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
    }, function(sres){
        res.writeHead(200, {
          'Content-Type': 'text/plain;charset=utf-8',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
          "X-Powered-By": ' 3.2.1'
        });
        sres.pipe(res);
        sres.on('end', function(){
            console.log('to '+pathname);
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
// 访问127.0.0.1:3001查看效果
app.listen(3001);
console.log('server started on 127.0.0.1:3001');