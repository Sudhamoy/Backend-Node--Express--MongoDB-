const http=require('http') //global function

const port=5000

const server=http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'}) //200 -> status code, writeHead->header(network tab)
  res.end('Hello World!')
})

server.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}/`)
})

/*
This JavaScript code creates a simple HTTP server using the built-in http module in Node.js. Here's a breakdown of what each part does:

(1) const http = require('http'):

This line imports the http module, which is a built-in module in Node.js.
The require function is used to import modules in Node.js.

(2) const port = 5000:

This line sets the port number that the server will listen on.
In this case, the server will listen on port 5000.

(3) const server = http.createServer((req, res) => { ... }):

This line creates a new HTTP server using the createServer method of the http module.
The createServer method takes a callback function as an argument. This callback function is called whenever the server receives a new request.

(4) The callback function takes two arguments: req (short for "request") and res (short for "response").
The req object contains information about the incoming request, such as the URL, method, headers, and body.
The res object is used to send a response back to the client.

(5) res.writeHead(200, {'Content-Type': 'text/html'}):

This line sets the HTTP status code and headers of the response.
In this case, the status code is set to 200 (which means "OK") and the Content-Type header is set to text/html, indicating that the response body contains HTML.
However, this code is incomplete because it doesn't send any response body. Typically, you would use the res.end() method to send the response body.

Example: const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello World!</h1>') // Send the response body
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

This code will start the server and listen on port 5000. When a request is received, it will send an HTML response with the text "Hello World!".
 */