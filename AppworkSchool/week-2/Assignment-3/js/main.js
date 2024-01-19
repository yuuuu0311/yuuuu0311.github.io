function calculate(data) {
    // your code here
    let discount = data.discount;
    let products = data.products;
    let totalPrice = 0;

    for (let index = 0; index < products.length; index++) {
        totalPrice += products[index]["price"] * (1 - discount);
    }

    return totalPrice;
}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100,
        },
        {
            name: "Product 2",
            price: 700,
        },
        {
            name: "Product 3",
            price: 250,
        },
    ],
});

console.log(discountedPrice); // show the total price of all products after applying a discount
