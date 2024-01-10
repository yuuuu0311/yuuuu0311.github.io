const toggleNavbar = () => {
    const hamberger = document.querySelector(".hamberger");
    const linkList = document.querySelector(".link");

    hamberger.addEventListener("click", () => {
        hamberger.classList.toggle("active");
        linkList.classList.toggle("active");
    });
};

window.onload = () => {
    toggleNavbar();
};
