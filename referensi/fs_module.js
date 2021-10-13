const fs = require("fs");

const path = require("path");

// //buat folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder berhasil dibuat");
// });

// //buat file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hallo dunia NodeJS",
//   (err) => {
//     if (err) throw err;
//     console.log("file berhasil dibuat ...");

//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " Kuliah web programming 2021",
//       (err) => {
//         if (err) throw err;
//         console.log("file berhasil di tambah kan datanya");
//       }
//     );
//   }
// );

fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
