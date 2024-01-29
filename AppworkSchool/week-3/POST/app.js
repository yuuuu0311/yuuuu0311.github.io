/* eslint-disable no-undef */
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// views
const landingPage = "landingPage";

app.set("view engine", "pug");

app.get("/", (req, res) =>
    res.render(landingPage, { username: req.cookies.username })
);

app.post("/", (req, res) => {
    res.cookie("username", req.body.username);
    // res.json(req.body);
    // res.render(landingPage, { username: req.body.username });
    res.redirect("/welcom");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
