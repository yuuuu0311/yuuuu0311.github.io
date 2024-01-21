const hearoFadeOutInit = () => {
    const hero = document.querySelector("#welcomHero");
    const sub = document.querySelector("#welcomSub");

    hero.addEventListener("click", (event) => {
        hero.classList.remove("active");
        sub.classList.add("active");
    });
};

const toggleNavbar = () => {
    const hamberger = document.querySelector(".hamberger");
    const linkList = document.querySelector(".link");

    hamberger.addEventListener("click", () => {
        hamberger.classList.toggle("active");
        linkList.classList.toggle("active");
    });
};

const showContentInit = () => {
    const btn = document.querySelector(".button-item");

    btn.addEventListener("click", () => {
        const contentGroup = document.querySelectorAll(".content-group.hidden");
        contentGroup[0].classList.remove("hidden");
    });
};
window.onload = () => {
    hearoFadeOutInit();
    toggleNavbar();
    showContentInit();
};
