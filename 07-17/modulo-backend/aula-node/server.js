const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  /*
   `200`: OK
   `201`: Created
   `400`: Bad Request
   `401`: Unauthorized
   `404`: Not Found
   `500`: Internal Server Error
  */  
  res.statusCode = 200;

  /*
   `text/html` para HTML
   `application/json` para JSON
   `application/pdf` para PDF
   */
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Olá, ${query.name}!</h1>
      </body>
    </html>
  `)
})

const port = 3000;
const host = '127.0.0.1';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})