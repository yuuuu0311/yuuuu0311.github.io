console.log('success');
let cities
const cors = 'https://cors-anywhere.herokuapp.com/';


// get data
    // cities
axios.get(`${cors}http://api.opencube.tw/twzipcode/get-citys`)
.then(res => {
    cities = res.data.data

    // Vue
    new Vue ({
        el: '#test',
        data: {
            message: '把您喜愛的美食親手外送給您',
            list: cities,
        }
    })

})
.catch(err => {
    console.error(err); 
})



new Vue({
    el:'#join',
    data: {
        join: 'go fuck yourself',
    }
})

