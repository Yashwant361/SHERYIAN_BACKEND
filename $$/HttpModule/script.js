const http = require('http')


const server = http.createServer((req, res) => {
     res.end("Hello World")


})
server.listen(8085,()=>{
    console.log("Server running on : http://localhost:8085");
})