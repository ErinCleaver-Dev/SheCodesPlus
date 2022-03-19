let price = 4.5;
let values = [4, 1, 3, 10]


let rounded = Math.round(price);
console.log(`Rounded: ${rounded}`);
let ceil = Math.ceil(price);
console.log(`Ceil: ${ceil}`)
let floor = Math.floor(price);
console.log(`Floor: ${floor}`)

let min = Math.min(...values)
console.log(`Min: ${min}`)
let max = Math.max(...values)
console.log(`Max: ${max}`)