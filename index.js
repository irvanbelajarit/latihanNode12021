const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req.url);

  if (req.url === "/") {
    //  res.end("<h1>Halaman Index Home</h1>");
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    //  res.end("<h1>Halaman about</h1>");
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server berjalan pada port ${PORT}...`));

// const Mahasiswa = require("./mahasiswa");

// const Mhs = new Mahasiswa("Irvan", 3);
// Mhs.greeting();
