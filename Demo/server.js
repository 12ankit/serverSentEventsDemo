const http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, {
      Connection: "keep-alive",
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    });
    let id = 1;
    // Send event every 3 seconds or so forever...
    setInterval(() => {
      response.write(`event: message\nid: ${id}\ndata:This is event ${id}.`);
      response.write("\n\n");
      if(id == 10){
        response.write(`event: close`)
        response.connection.end()
      }
      id++;
    }, 1000);
  })
  .listen(5000);
