console.log('success');

// 每月投入額  殖利率 持續幾年
let startAmount 
let monthlyInvest
let rate
let years

// let array = [1, 3, 5 ,7 ,9]
// console.log(array);
// array.map(function(item,index){
//     array[index] = item*=2
// })
// console.log(array);


let form = document.querySelector('#form')
let btn = document.querySelector('.btn')
btn.addEventListener('click',test)

// get value
function test(){
    let formValue = document.querySelectorAll('.form-control')
    let toArray = Array.apply(null,formValue)

        // toArray.forEach(function(item,index){
        //     console.log(item.value);
        // })

        // console.log('test success')

    calculate(toArray)
}



// calculate
function calculate(value){
    // order: startAmount monthlyInvest rate month
    let result = []
    let years = 0

    // to numbers
    value.map(function(item,index){
        value[index] = Number(item.value);   
    })
    let start = value[0]

    // show title
    amount_Title.textContent = value[0]
    invest_Title.textContent = value[1]
    rate_Title.textContent = value[2]
    year_Title.textContent = value[3]

    // 先推一個起始值
    result.push(
        {
            year: years,
            invest: value[0],
            profit: 0,
            amount: value[0]
        }
    )

    // do calculate here
    for(i=0;i<value[3];i++){
        value[0]+=value[1]*12 // add invest
            years++
            value[0]*=(1+value[2]/100)  // times rate

            // push data
            result.push(
                {
                    year: years ,
                    invest: (value[0] / (1+value[2]/100)).toFixed(),
                    amount: value[0].toFixed()  
                }
            )
            


    }
    console.log(result);
    writeResult(result)
}

// result  (use for圈/forEach)
let amount_Title = document.querySelector('#start')
let invest_Title = document.querySelector('#invest')
let rate_Title = document.querySelector('#rate')
let year_Title = document.querySelector('#year')

let tableBody = document.querySelector('tbody')


function writeResult(result){
    let table = ''

    result.forEach(function(item,index){
        table+= `<tr>
                    <th scope="row">${item.year}</th>
                    <td>${item.invest}</td>
                    <td>${item.amount-item.invest}</td>
                    <td>${item.amount}</td>
                 </tr>`
    })

    tableBody.innerHTML = table
    // for(i=0;i<result.length;i++){
    //     table+= cc
    //     tableBody.innerHTML = table
    // }

}


