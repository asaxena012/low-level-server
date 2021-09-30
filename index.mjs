import http from 'http';

const host = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        let body = '';

        req.on('connection', () => {
            console.log('someone connected')
        })

        req.on('data', chunk => {
            body += chunk.toString();
        })

        req.on('end', () => {
            body = JSON.parse(body)
            console.log(body)

            res.writeHead(201);
            res.end('ok')
        })
    } else {
        res.writeHead(200);
        res.end('hello from my low level server')
    }
})

server.listen(port, host, () => {
    console.log(`Server listening on ${host}:${port}`);
})