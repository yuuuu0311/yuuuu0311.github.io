const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// views
const getData = "getData";

app.set("view engine", "pug");

// http://localhost:3000
app.get("/", (request, response) => {
    response.send("<p>Hello world!!</p>"); // param: file name
});

// http://localhost:3000/getData
app.get("/getData", (request, response) => {
    console.dir(request.query); // request.query => 取網址參數
    response.render(getData, { number: request.query.number });
});

// http://localhost:3000/getData
// app.post("/getData", (request, response) => {
//     console.dir(request.body.number);
//     response.render(getData, { number: request.body.number });
// });

// web server will be hosted at port at 30000
app.listen(3000, () => {
    console.log("application is hosted at local host 3000");
});
