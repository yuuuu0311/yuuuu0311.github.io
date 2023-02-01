// 函式
function swiper_main() {
    // 物件
    let swiperPoster = new Swiper(".swiper-poster", {
        // 參數
        direction: "vertical",
        centeredSlides: true,

        autoplay: {
            delay: 4500,
        },

        mousewheel: {
            invert: false,
        },

        grabCursor: true,
        speed: 1000,

        slidesPerView: 1,
    });
}

window.onload = () => {
    swiper_main();
};
