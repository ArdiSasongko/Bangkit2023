//object ditandai dengan {}, yang berisi key dan value
//untuk memberikan nilai pada key harus menggunankan :

const user = {
    firstName : "Ardi",
    lastName : 'Sasongko',
    age : 21,
    martialStatus : false,
    "home town" : "Kulon Progo"
}

//untuk mengakses nilai objec menggunakan . (dot)
//atau menggunakan tanda kurung siku []

console.log(`Halo nama saya ${user.firstName} ${user.lastName}`)
console.log(`Usia saya ${user.age} dan saya berasal dari ${user["home town"]}`)

//memodifikasi value dari objec

user["home town"] = "Pengasih";

console.log("Setelah value home town dimodifikasi")
console.log(`Halo nama saya ${user.firstName} ${user.lastName}`)
console.log(`Usia saya ${user.age} dan saya berasal dari ${user["home town"]}`)

//menghapus value dari objec

delete user.lastName

console.log("Setelah value lastName dihapus")
console.log(`Halo nama saya ${user.firstName} ${user.lastName}`)
console.log(`Usia saya ${user.age} dan saya berasal dari ${user["home town"]}`)

let firstName = user.firstName
let homeTown = user["home town"]
console.log(homeTown)