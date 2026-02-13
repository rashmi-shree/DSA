const http = require('http')
const server = http.createServer(function(req, res){
    if(req.url === "/getsecretdata"){
        res.end("there is no secret data")
    }
    res.end("hello world")
})
server.listen(3000) 