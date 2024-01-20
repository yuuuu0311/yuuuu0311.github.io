const hearoFadeOutInit = () => {
    const hero = document.querySelector("#welcomHero");
    const sub = document.querySelector("#welcomSub");

    console.log(hero, sub);

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

window.onload = () => {
    hearoFadeOutInit();
    toggleNavbar();
};
