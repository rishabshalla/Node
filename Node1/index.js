const http = require("http"); // http module

http
  .createServer((req, res) => {
    // res.write("Hello There")
    res.write("<h1>Namaste Duniya</h1>"); //sending html response

    // res.write(JSON.stringify({ name:"Rishab", batch: 'DEC'}))

    res.end(); // to end event loop
  })
  .listen(8000);
