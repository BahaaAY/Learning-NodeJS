const http = require('http'); //importing the http library

/**function httpListener(req, res) // httpListener(request, response)
{

}**/

const routes = require('./routes');
const server = http.createServer(routes.requestHandler);
server.listen(3000);