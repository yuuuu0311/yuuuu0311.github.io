console.log("initial");

let optionData = JSON.parse(JSON.stringify(data));
console.log(optionData);


// function addOption(){

//     let optionValue = document.querySelector("#optionType").value;
    
//     if(optionValue == "Choose..."){
//         return alert(`你他媽給我好好選`);
//     }else{
//         $("#optionType").addClass("d-none");
//         $("#inputData").removeClass("d-none");
//         return pushData(optionValue);
//     }

// }

// function pushData(value){
//         console.log(value);  // start fom here, to get insert data
// }


// show input



// let el = document.querySelector("#button-addon1");
// el.addEventListener("click",addOption)



// new option
let selValue = document.querySelector("select")
// console.log(selValue);

// get option type
let value = "";
selValue.addEventListener("change", function(selected){
    console.log(selected.target.value);
    $("#optionType").addClass("d-none");
    $("#inputData").removeClass("d-none");
    return value = String(selected.target.value);
})



// get option name
let submit = document.querySelector("#submit")
// console.log(submit);

submit.addEventListener("click", function(newOption){
    //get option name
    let option = document.querySelector("#insertOption").value;
    
    // write new option to data
    optionData[value].push(option);
    console.log(optionData[value][optionData[value].length-1]);
    alert("新增完成");

    // reset
    $("#optionType").removeClass("d-none");
    $("#inputData").addClass("d-none");
})

