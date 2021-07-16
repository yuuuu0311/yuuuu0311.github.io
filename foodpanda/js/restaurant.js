const loCation = ['台北','新北','基隆','新竹','宜蘭','桃園','台南','高雄']

let cityContainer = document.querySelector('.city')
let cityCard = []
let content = ''

for (i = 0; i <= 7; i++) {
    console.log(location[i]);
    let card = `
    <div class="col">
        <div class="card text-white border-0 overflow-hidden">
            <h1 class="card-title fw-bolder card-img-overlay">${loCation[i]}</h1>
            <img src="./img/city_${i}.jpg" class="card-img" alt="...">
        </div>
    </div>
    `
    content+=card
    cityContainer.innerHTML = content
}



console.log(i);