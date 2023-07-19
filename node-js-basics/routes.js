const fs = require('fs');
const requestHandler = (req,res)=>{
    if(req.url === '/')
    {
        res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Server Response!</title></head>');
    res.write('<body><h1>Welcome</h1> <form action= "/message"method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if(req.url === '/message' && req.method === 'POST')
    {
        const body =[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('messages',message);
    
        });
        
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    
    }
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Server Response!</title></head>');
    res.write('<body><h1>Hello World From My Node.js Server!!!</h1></body>');
    res.write('</html>');
    res.end();
}
exports.requestHandler = requestHandler;