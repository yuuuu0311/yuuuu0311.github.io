
const navbar = document.querySelector('nav')
const section = document.querySelector('section')

// 組出分類裡的選單
let createTab = () => {   
    navData.forEach((ele,index) => {
        let tab_box = document.createElement('div')
        tab_box.classList.add('tab_box') 

        ele.tab.forEach((ele,index) => {
            let tab = document.createElement('div')
            tab.classList.add('tab')
    
            let h5 = document.createElement('h5')
            h5.innerHTML = ele.content
            tab.appendChild(h5)

            let ul = document.createElement('ul')
            ele.item.forEach((ele,index) => {
                let li = document.createElement('li')
                let a = document.createElement('a')
                a.setAttribute('href', ele.url)
                li.innerHTML = ele.text
                a.appendChild(li)

                // 是否為新品
                if (ele.new == true){
                    let newTag = document.createElement('span')
                    newTag.classList.add('new_tag')
                    newTag.innerHTML = 'new'
                    a.appendChild(newTag)
                }

                ul.appendChild(a)
            })

            tab.appendChild(ul)
            tab_box.appendChild(tab)
            navbar.appendChild(tab_box)
        })

    })

}

// 組出分類
window.onload = () => {
    let tab_title_box = document.createElement('div')
    tab_title_box.classList.add('tab_title_box')    
    navData.forEach((ele,index) => {
        let tab_title = document.createElement('div')
        tab_title.classList.add('tab_title')
        tab_title.innerHTML = ele.title

        tab_title_box.appendChild(tab_title)
    })

    navbar.appendChild(tab_title_box)
    createTab()

    // 操作
    let tab_title = document.querySelectorAll('.tab_title_box .tab_title')
    let tab_box = document.querySelectorAll('.tab_box')
    let sub_title = document.querySelectorAll('nav .tab_box .tab h5')
    let sub_box = document.querySelectorAll('nav .tab_box .tab ul')
    behavior(tab_title,tab_box,sub_title,sub_box)
}




// 操作

let behavior = (tab_title,tab_box,sub_title,sub_box) => {
    // 第一層選單
    tab_title.forEach((ele,index) => {
        // pc
        ele.addEventListener('mousemove', (event) => {
            tab_title.forEach((ele,index) => {
                ele.classList.remove('active')
            })
            tab_title[index].classList.add('active')

            tab_box.forEach((ele,index) => {
                ele.classList.remove('active')
            })
            tab_box[index].classList.add('active')
        },false)  

    })
    
    // 第三層選單_只針對手機
    sub_title.forEach((ele,index) => {
        ele.addEventListener('touchend', (event) => {
            sub_box.forEach((ele,index) => {
                ele.classList.remove('active')
            })
            sub_box[index].classList.add('active')

        }) 
 
    },false)


    // 關閉選單
    tab_box.forEach((ele,index) => {
        // pc
        ele.addEventListener('mouseleave', () => {
            ele.classList.remove('active')
            tab_title[index].classList.remove('active')
        })
    },false)

    // 點其他區關閉選單
    let removeContent = (event) => {

        if( event.composedPath().includes(navbar) ) {
            return
        } else {
            tab_title.forEach((ele,index) => {
                ele.classList.remove('active')
            })

            tab_box.forEach((ele,index) => {
                ele.classList.remove('active')
            })            
        }
    }    

    document.addEventListener('touchstart',(event) => {
        removeContent(event)
    })




}



