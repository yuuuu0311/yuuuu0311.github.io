// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
// response data in the page. You may render UI with any style.

function ajaxHandler(readyState, status) {
    return readyState == 4 && status == 200 ? true : false;
}

function ajax(url) {
    // your code here
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.onload = () => {
            const { readyState, status, response } = request;
            ajaxHandler(readyState, status)
                ? resolve(JSON.parse(response)) // 成功
                : reject("失敗"); // 失敗
        };

        request.open("GET", url, true);
        request.send();
    });
}
function render(data) {
    // your code here
    const container = document.querySelector(".product-list");

    data.map((ele) => {
        const { name, price, description } = ele;
        const li = document.createElement("li");
        li.className = `product-item`;

        const template = `
            <div class="product-img">
                <span>img</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">名稱：${name}</h3>
                <p class="product-price">價錢：${price}</p>
                <p class="product-desc">描述：${description}</p>
            </div
        `;

        li.innerHTML = template;

        container.appendChild(li);
    });

    // const parseData = JSON.parse(data);
    // console.log(parseData);
}
const url =
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
    render(data);
});
// you should get product information in JSON format and render data in the page
