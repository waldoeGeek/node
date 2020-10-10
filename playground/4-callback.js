// setTimeout(() => {
//     console.log("2 seconds are up");
// }, 2000)

// const names = ['joe', 'ass', 'hatt']

// const shortnames = names.filter((name) => {
//     return name.length <= 4
// })

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 222,
//             long: 200
//         }

//         callback(data)
//         // return data
//     }, 3000)
// }

// geoCode("jhvghh", (data) =>{
//     console.log(data);
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 3000)
}

add(1, 4, (sum) => {
    console.log(sum);
})