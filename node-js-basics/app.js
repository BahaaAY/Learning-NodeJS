const http = require('http'); //importing the http library


/**function httpListener(req, res) // httpListener(request, response)
{

}**/


const server = http.createServer((req,res)=>{
console.log(req);
});
server.listen(3000);