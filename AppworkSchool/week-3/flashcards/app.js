/* eslint-disable no-undef */

const express = require("express");

const app = express();

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// tell express to use pug engine
app.set("view engine", "pug");

// creating route
app.get("/", (request, response) => {
    // response.send("too good"); // send a string to client
    response.render("index"); // param: file name
});

app.get("/cards", (request, response) => {
    // 01
    response.render("cards", {
        prompt: "a question being place",
        hint: "it's a hit yo",
        colors,
    }); // param: file name

    // 02
    // response.locals.prompt = "a question being place";
    // response.locals.hint = "it's a hit yo";
    // response.render("cards"); // param: file name
});

app.listen(3000, () => {
    console.log("application is updated");
});
