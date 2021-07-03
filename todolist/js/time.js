// timer 

var x = setInterval(function(){
    let timeTag = document.querySelectorAll('.time')
    let tagArray = Array.apply(null,timeTag)


    tagArray.forEach(function(item,index){
        let now = new Date().getTime()
        let distance = now - todoArray[index].time

        let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        tagArray[index].innerHTML = mins


    })
        
    


},30000)

