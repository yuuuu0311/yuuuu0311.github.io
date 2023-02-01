let decriBtn = document.querySelectorAll(".btn[data-btn]");
let dialogList = document.querySelectorAll("dialog");
let closeBtn = document.querySelectorAll(".bottom-close");

// console.log(decriBtn);
// console.log(dialogList);

decriBtn.forEach(function (ele, index) {
    ele.addEventListener("click", function () {
        dialogList[index].showModal();
    });
});

// checker
function dialogchecker() {
    dialogList.forEach(function (ele, index) {
        if (ele.open) {
            dialogList[index].close();
            return;
        }
    });
}

closeBtn.forEach(function (ele, index) {
    ele.addEventListener("click", dialogchecker);
});
