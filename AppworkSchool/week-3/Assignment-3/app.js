const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

const router = require("./routes");

app.use(router);

// web server will be hosted at port at 30000
app.listen(port, () => {
    console.log("application is hosted at local host 3000");
});
