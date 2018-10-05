const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>ThankYou.co</h1>');    
})
.listen(3000, function() {
    
});