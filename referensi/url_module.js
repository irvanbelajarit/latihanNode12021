const url = require("url");

const myUrl = new URL(
  "http://untar.ac.id:8080/nodejs.html?id=100&status=active"
);

//serialisasi url
console.log(myUrl.href);

//host
console.log(myUrl.host);
//hostname
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);

//query
console.log(myUrl.search);
//objest query
console.log(myUrl.searchParams);

myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.search);
