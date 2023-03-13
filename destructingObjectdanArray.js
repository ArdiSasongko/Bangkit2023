//objec

const user = {
    name : "Ardi",
    age : 25,
    homeTown : "kulon Progo"
}

//penamaan harus sama dengan objec
const {name,age,homeTown} = user
//jika = const {name,age,homeTown} = profil, maka akan error

console.log(user)

//kita juga bisa mendestructing secara spesifik
const profil = {
    name1 : "Budi",
    age1 : 35
}

const {name1} = profil
console.log(name1)

//assigning objec

const {name:localName, age:localAge} = user
console.log(localName)

//Array

const fav = ["Appel","Mangga","Durian"]


//destructing pada array
const [firstFav, secondFav, thirdFav] = fav
console.log(firstFav)

//destructing assigment

let myfav = "Anggur";
[myfav] = fav

console.log(myfav)