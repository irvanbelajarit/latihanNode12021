const path = require("path");

//ambil nama file
console.log(__filename);
console.log(path.basename(__filename));

//ambil direktori
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename));

//objec
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

//concatenate
console.log(path.join(__dirname, "test", "hello.html"));
