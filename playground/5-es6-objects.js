//object property shorthand
// const name = 'Thomas'
// const userAge = 36

// const user = {
//     name,
//     userAge
// }

// console.log(user)
// console.log(user.userAge);

// Object Destructuring
const products = {
    label: 'red oyseters',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//  const label = products.label
//  const stock = products.stock

// const {label:productLabel, stock, rating = 5 } = products
// console.log(productLabel);
// console.log(rating);

const transac = (type, { label, stock }) => {
    // const { label } = myProduct
    console.log(type, label, stock);
}

transac('order', products)
