// create a basic node server
const http = require('http')
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
})

server.listen(PORT, function () {
  console.log(`listening to port ${PORT}`)
})
