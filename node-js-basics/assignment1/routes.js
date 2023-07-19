const fs = require('fs');
const requestHandler = (req, res) =>
{
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment!</title></head>');
        res.write('<body><h1>Welcome</h1> <h2>Username:</h2><form action= "/create-user" method="POST"><input name="username" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method == 'POST')
    {
        console.log('create USer2');

        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log('dataaa');
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log('User: ' + user);
            res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    }
    if(url === '/users')
    {
            res.statusCode = 200
            res.write(`
        <html>
            <head>
                <title>Users</title>
            <head/>
            <body>
                <ul>
                    <li>User1</li>
                </ul>
            </body>
        </html>`);
            return res.end();

    }

}

exports.requestHandler = requestHandler;