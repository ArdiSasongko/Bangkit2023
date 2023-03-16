const {foods,drinks} = require(`./export`)

console.log(foods)

const filterFoods = foods.filter((stock)=>stock.stock < 100);
console.log(filterFoods)
const filterDrinks = drinks.filter((stock)=>stock.stock < 100);
const nameDrinks = filterDrinks.map((drink)=> `Minuman ${drink.name} sisa ${drink.stock}!`)
console.log(nameDrinks)

//import menggunakan E6, kita juga bisa mengganti nama menggunakan as

import { foods2 as foodIndo,drinks2 } from "./export";

console.log(foodIndo)
console.log(drinks2)