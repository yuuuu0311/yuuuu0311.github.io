let btnToggler = document.querySelector('#btn-toggler');
let navBar = document.querySelector('nav');
let content = document.querySelector('.content')

// toggle
navBar.addEventListener('click',function(){
    navBar.classList.toggle('nav-active')
    content.classList.toggle('content-active')
})