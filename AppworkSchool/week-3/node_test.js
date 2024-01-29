// console.log("Hello World!!");

const { error } = require("console");
const https = require("https");
function getProfile() {
    const request = https.get(
        "https://teamtreehouse.com/profiles/csalgado.json",
        (response) => {
            let responseBody = "";

            // 組出 reponse 字串
            response.on("data", (data) => {
                responseBody += data;
            });

            response.on("end", () => {
                let result = JSON.parse(responseBody);
                console.log(result);
            });
        }
    );

    request.on("error", () => {
        console.error(error.message);
    });
}

getProfile();
