function perkalian(a,b){
    return a*b;
}

console.log(perkalian(2,4))

function introduce({name,age,hometown}){
    console.log(`Namanya ${name} umurnya saat ini adalah ${age} dan berasal dari ${hometown}`)
}
const user = {
    name : "Budi",
    age : 21,
    hometown : "Wates"
}

introduce(user);

//arrow functiom expression, tidak perlu menuliskan function

const penjumlahan = (a,b) =>{
    return a+b;
}

console.log(penjumlahan(4,10)) //14

//untuk meringkas kode
const pengurangan = (a,b) => a-b;
//hasilnya akan sama dengan return
console.log(pengurangan(20,18))

