const btnArr = document.querySelectorAll(".content .btn");
const bnArr = document.querySelectorAll(".content .content-item-bn");

const contentInit = (index) => {
    btnArr.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {
            [...getSiblings(event.target)].map((ele) => {
                ele.classList.remove("active");
            });

            event.target.classList.add("active");
            getBnShow(index);
        });
    });
};

const getBnShow = (index) => {
    [...getSiblings(bnArr[index])].forEach((ele) => {
        ele.classList.remove("active");
    });

    bnArr[index].classList.add("active");
};

const getSiblings = (ele) => {
    return ele.parentNode.children;
};

window.onload = () => {
    contentInit();
    /*延遲載圖*/
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy", //物件
        //threshold: 300, //預載量 預設300
    });
};
