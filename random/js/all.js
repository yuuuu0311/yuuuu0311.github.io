const optionData = JSON.parse(JSON.stringify(data));
console.log(optionData);

$( document ).ready(function() {
    $("form").slideDown(2000);
});

// function getRandomFood(){
//     let result = Math.floor(Math.random()*optionData.food.length);
//     console.log(result);
//     return document.querySelector('span').innerHTML = `${optionData.food[result]}`; 
// }

// function getRandomDrink(){
//     let result = Math.floor(Math.random()*optionData.drink.length);
//     console.log(result);
//     return document.querySelector('span').innerHTML = `<span style="color: yellowgreen;">${optionData.drink[result]}</span>`; 
// }

function getRandom(value){
    console.log(value);

    let result = Math.floor(Math.random()*optionData[value].length);
    console.log(result);


    if(value == "food"){
        return document.querySelector('span').innerHTML = `${optionData[value][result]}`;
    }else{
        return document.querySelector('span').innerHTML = `<span style="color: yellowgreen;">${optionData[value][result]}</span>`;
    }

}

let el = document.querySelector(".input-group");
console.log(el);

el.addEventListener("click", function(value){
    getRandom(value.target.value);
})

// newOption


