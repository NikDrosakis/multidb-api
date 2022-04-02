import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3006 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});