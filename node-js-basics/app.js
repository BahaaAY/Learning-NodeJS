const http = require('http'); //importing the http library


/**function httpListener(req, res) // httpListener(request, response)
{

}**/


const server = http.createServer((req,res)=>{
console.log(req.url, req.method, req.headers);
console.log("url: " + req.url +"\n method: " + req.method)
//process.exit(); stops the event loop

res.setHeader('Content-Type' , 'text/html');
res.write('<html>');
res.write('<head><title>My First Server Response!</title></head>');
res.write('<body><h1>Hello World From My Node.js Server!!!</h1></body>');
res.write('</html>');
res.end();


});
server.listen(3000);