const express = require("express");

const app = express();

// tell express to use pug engine
app.set("view engine", "pug");

app.get("/", (request, response) => {
    response.render("layout"); // param: file name
});

// web server will be hosted at port at 30000
app.listen(3000, () => {
    console.log("application is hosted at local host 3000");
});
