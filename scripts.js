const products = [
    {
        name:"Laptop",
        price:800,
        category:"Computer"
    },
    {
        name:"Mouse",
        price:25,
        category:"Accessory"
    },
    {
        name:"Keyboard",
        price:50,
        category:"Accessory"
    }
]

console.log(products[0].name)
console.log(products[1].price)
products[2].price = 60
products[0].stock = 10

console.log(products[0].stock )
console.log(products.length)
