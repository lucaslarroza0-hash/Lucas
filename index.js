const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola! Servidor de Lucas funcionando impecable.');
});
server.listen(process.env.PORT || 3000, () => {
  console.log('Servidor en marcha');
});
