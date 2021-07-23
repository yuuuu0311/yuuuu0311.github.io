let btnToggler = document.querySelector('#btn-toggler');
let navBar = document.querySelector('nav');
let content = document.querySelector('.content')
let colleagueRow = document.querySelector('.colleague-row')




// toggle
navBar.addEventListener('click',function(){
    navBar.classList.toggle('nav-active')
    content.classList.toggle('content-active')
})

// colleague row slide
colleagueRow.addEventListener('mouseover',function(event){
    document.body.classList.toggle('overflowY-hidden')

    colleagueRow.addEventListener('wheel',function(event){
        if(event.wheelDelta){            //Judging browser IE, Google wheel events
            if(event.wheelDelta>0){  //When the pulley rolls up
                colleagueRow.scrollLeft-=100
        }
            if(event.wheelDelta<0){          //When the pulley scrolls down
                colleagueRow.scrollLeft+=100
        }
        }else if(event.detail){             //Firefox wheel event
            if(event.detail>0){         //When the pulley scrolls down
               alert("Pulley scroll down");
        }
            if(event.detail<0){            //When the pulley rolls up
            alert("Pulley rolls up");
        }
        }
    })

    colleagueRow.addEventListener('mouseout',function(){
        document.body.classList.toggle('overflowY-hidden')
    })
})

