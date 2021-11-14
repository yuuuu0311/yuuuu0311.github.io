console.log('success');

// 點擊觸發
// let btn = document.querySelector('button')
// let shopNow = document.querySelector('h1')

// btn.addEventListener("click", function(){
//     shopNow.classList.toggle('shop-now-animated')   
// })


// 滑到特定區塊觸發
let h1 = document.querySelector('h1')
let section = document.querySelector('section')

let windowHeight = window.innerHeight

window.onscroll = function(){
    if ( window.scrollY % windowHeight >= windowHeight/2 || window.scrollY % windowHeight < windowHeight/4 ){
        h1.classList.add('shop-now-animated')
    } else {
        h1.classList.remove('shop-now-animated')
    }
}












// 嘗試
// window.addEventListener('scroll', function(){
//     section.forEach(function(element){
//         if(window.scrollY >= element.offsetTop){
//             h1.forEach(function(element){
//                 element.classList.toggle('shop-now-animated')
//             })
//         }
//     })
// })


// window.addEventListener('scroll', function(){
//     section.forEach(function(element){
//         if(window.scrollY <= (element.offsetTop += element.offsetHeight)){
//             h1.forEach(function(element){
//                 element.classList.toggle('shop-now-animated')
//             })
//         }
//     })
// })