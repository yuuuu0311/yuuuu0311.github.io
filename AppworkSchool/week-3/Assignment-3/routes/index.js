const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

// views
const getData = "getData";

// serving static files
router.use(express.static("public")); // public 是資料夾名稱

// http://localhost:3000/getData
router.get("/getData", (request, response) => {
    console.dir(request.query); // request.query => 取網址參數
    response.render(getData, { number: request.query.number });
});

// http://localhost:3000/getData
router.post("/getData", (request, response) => {
    const postData = request.body;

    if (!postData.number) {
        response.send({ result: `Lack of Parameter` });
    } else if (
        postData.number > 0 &&
        Number.isInteger(Number(postData.number))
    ) {
        let result = 0;

        for (let index = 0; index <= postData.number; index++) {
            result += index;
        }
        response.send({ result: result });
    } else {
        response.send({ result: `Wrong Parameter` });
    }
});

module.exports = router;
