//menggunakan titik tiga (...) digunakan untuk meleburkan nilai array atau objek

//array
const fav1 = ["Apel", "Mangga", "Jeruk"];
const fav2 = ["Durian", "Salak", "Nangka"]

//tidak menggunakan spread operator, maka akan menghasilakn 2 array yang disimpan di 1 array

const allFav = [fav1, fav2]
console.log(allFav)

//menggunakan spread operator, maka nilai array disimpan di 1 array
const allFav2 = [...fav1,...fav2]
console.log(allFav2)

//object

let obj1 = {name :"Budi", age : 25, homeTown : "Bandung"}
let obj2 = {last :"Joko", gender : "Male"}

let newObj = {...obj1,...obj2};
console.log(newObj)
