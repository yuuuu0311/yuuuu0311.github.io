let content = document.querySelector('.content')
let cover = document.querySelector('.cover')
let canvasContent = content.getContext('2d')
let canvasCover = cover.getContext('2d')

let wWidth = window.innerWidth
let wHeight = window.innerHeight

content.width = cover.width = wWidth
content.height = cover.height = wHeight

// random pic
let imgArray = ['./img/01.jpeg','./img/02.jpeg']
let img = new Image()
img.src = imgArray[Math.floor(Math.random()*imgArray.length)]


window.onload = () => {
    create()
}



// 第一次生成
function create() {
    // 生成底下內容
    canvasContent.drawImage(img,0,0,wWidth,wHeight)
    // 生成覆蓋
    canvasCover.canvas.style.opacity = 1
    canvasCover.fillStyle = 'gray'
    canvasCover.fillRect (0,0,wWidth, wHeight) // (x,y,width,height)
    canvasCover.globalCompositeOperation = 'destination-out' // 設定為圖形減去

}



// 刮開
// pc
cover.addEventListener('mouseup', eventUp)
cover.addEventListener('mousedown', eventDown)
cover.addEventListener('mousemove', eventMove)
// mb
cover.addEventListener('touchend', eventUp)
cover.addEventListener('touchstart', eventDown)
cover.addEventListener('touchmove', eventMove)

function eventDown(event){
    event = event || event;
    event.preventDefault(); //取消冒泡
    eventDown = true
}

function eventUp(event){
    event = event || event;
    event.preventDefault(); //取消冒泡
    eventDown = false
}

function eventMove(event){
    event = event || event;
    event.preventDefault(); //取消冒泡

    if(eventDown == true){

        if( event.changedTouches ){
            event = event.changedTouches[event.changedTouches.length-1]
        }

        let x = event.pageX - this.offsetLeft
        let y = event.pageY - this.offsetTop
        canvasCover.beginPath()
        canvasCover.arc(x, y, 50, 0, Math.PI * 2) // (x, y, radius, startAngle, endAngle [, counterclockwise])
        canvasCover.fill()

    }

}
