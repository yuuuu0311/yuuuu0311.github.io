console.log('import success');

let tag = document.querySelector(".tag");
let comeBack = new Date("Mar 11, 2021 00:00:00").getTime();

// console.log(comeBack);

setInterval(
    function() {
        let now = new Date().getTime();
        let remain = comeBack - now;
    
        let days = Math.floor(remain/(1000 *60 *60 *24))
        let hours = Math.floor((remain % (1000 *60* 60 *24)) / (1000* 60 *60))
        let mins = Math.floor((remain % (1000 *60 *60)) / (1000 *60))
        let seconds = Math.floor((remain % (1000 *60)) / 1000)

        tag.innerHTML = `${days}<span>day</span> ${hours}<span>hour</span> ${mins}<span>min</span> ${seconds}<span>sec</span>`

        if(remain <= 0){
            tag.innerHTML = `Welcome Back`
        }
    },1000


)
