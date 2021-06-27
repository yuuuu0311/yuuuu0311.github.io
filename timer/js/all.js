console.log('import success');

let tag = document.querySelector(".tag");
let text = document.querySelector('.text')

let comeBack = new Date("Apr 25, 2021 00:00:00").getTime();
let quarantine = new Date("May 11, 2022 00:00:00").getTime();


// console.log(comeBack);
let x = setInterval(
    function() {
        let now = new Date().getTime();
        let remain = comeBack - now
    
        let days = Math.floor(remain/(1000 *60 *60 *24))
        let hours = Math.floor((remain % (1000 *60* 60 *24)) / (1000* 60 *60))
        let mins = Math.floor((remain % (1000 *60 *60)) / (1000 *60))
        let seconds = Math.floor((remain % (1000 *60)) / 1000)

        tag.innerHTML = `${days}<span>day</span> ${hours}<span>hour</span> ${mins}<span>min</span> ${seconds}<span>sec</span>`
        text.innerHTML = `till Karna back`
        if(remain <= 0){
            clearInterval(x)
            quarantineTime()
        }
    },1000
)

function quarantineTime() {

    let y = setInterval(
        function() {
            let now = new Date().getTime();
            let remain = quarantine - now

            let days = Math.floor(remain/(1000 *60 *60 *24))
            let hours = Math.floor((remain % (1000 *60* 60 *24)) / (1000* 60 *60))
            let mins = Math.floor((remain % (1000 *60 *60)) / (1000 *60))
            let seconds = Math.floor((remain % (1000 *60)) / 1000)

            tag.innerHTML = `${days}<span>day</span> ${hours}<span>hour</span> ${mins}<span>min</span> ${seconds}<span>sec</span>`
            text.innerHTML = `till quarantine over`

            if(remain <= 0){
                tag.innerHTML = `Karna is back`
                text.innerHTML = ``
                clearInterval(y)
            }
        },1000
    )

}

