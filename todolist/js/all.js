console.log('success');

// event data
let todoArray = []

// selector
let inputBox = document.querySelector('.event')
let description = document.querySelector('.des')
let todo = document.querySelector('.todo-list')
let amount = document.querySelector('.amount')

let btnAdd = document.querySelector('.btn-add')

// El

// add new events
btnAdd.addEventListener('click', function(event){    
    // no empty value allowed !!
    if (inputBox.value == "" || description.value == "") {
        alert('Please add a new event & description !!')
    } else {
        // do something here
        todoArray.push({
            title: `${inputBox.value}`,
            desc: `${description.value}`,
            time: `${new Date().getTime()}`
        })
        
        showEvent()

    }
})


// item list structure 

function showEvent() {
    let card = ""
    
    todoArray.forEach(function(item,index){
        card += ` <div class="card mb-2">
        <div class="card-header d-flex flex-fill justify-content-between">
            <div class="d-flex flex-grow-0 align-items-center gap-2">
                <span class="status"></span>
                <strong>${item.title}</strong>
            </div>
            <button type="button" class="btn-close" aria-label="Close" value="${index}"></button>                            </div>
        <div class="card-body d-flex pb-0">
            <p>${item.desc}</p>
            <small class="ms-auto"><span class="time">0</span>mins ago</small>
        </div>
    </div>`
    })
    
    todo.innerHTML = card
    amount.innerHTML = `${todoArray.length}` 

    closeEl()

    clear()

}

// clear form
function clear(){
    inputBox.value = ''
    description.value = ''
}


// timer

// closeEl
function closeEl(){
    var btnCloseEl = document.querySelectorAll('.btn-close')

    let closeArray = Array.apply(null,btnCloseEl)

    closeArray.forEach(function(item,index){
        item.addEventListener('click',function(event){
            deleteEvent(item.value)
        })
    })    

}


// remove 
function deleteEvent(value){
    todoArray.splice(value,1)

    afterDelete()
    closeEl()

}

// note: 刪除的功能現在還沒辦法做/時間戳記要怎麼顯示

function afterDelete(){
    let card = ""
    
    todoArray.forEach(function(item,index){
        card += ` <div class="card mb-2">
        <div class="card-header d-flex flex-fill justify-content-between">
            <div class="d-flex flex-grow-0 align-items-center gap-2">
                <span class="status"></span>
                <strong>${item.title}</strong>
            </div>
            <button type="button" class="btn-close" aria-label="Close" value="${index}"></button>                            </div>
        <div class="card-body d-flex pb-0">
            <p>${item.desc}</p>
            <small class="ms-auto"><span class="time">0</span>mins ago</small>
        </div>
    </div>`
    })
    
    todo.innerHTML = card
    amount.innerHTML = `${todoArray.length}` 
}
