console.log('restaurant');



let restaurantCard = []
const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://picsum.photos/v2/list'

 


axios.get(`${url}`)
.then(res => {
    console.log(res);
    data = res.data
    console.log(data[0]);

    let restaurantCard = data.slice(16, 24)


    new Vue({
        el:'#restaurant',
        data: {
            restaurantCard,
    
        }
    })

})
.catch(err => {
    console.error(err); 
})



