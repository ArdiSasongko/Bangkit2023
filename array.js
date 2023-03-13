let user = ["Ardi Sasongko", 22, "Kulon Progo"];

//cara mengakses array yaitu dengan menyertakan index

console.log(`Nama saya `+user[0]+` usia saya `+user[1]+` saya berasal dari `+user[2]);

//cara memodifikasi array

//push = menambahkan value ke array ke index terakhir

user.push("Anak kedua")
console.log(user)

//pop = mengeluarkan value yang berada di index terakhir
user.pop();
console.log(user)

//shift = mengeluarkan value yang berada di index pertama
//unshift = menambahkan value ke index pertama

user.shift();
console.log(user)
user.unshift('Budi Susanto')
console.log(user)

//delete = menghapus, hanya menghapus data dan membiarkan kosong
//splice = menghapus dan tidak ada data yang tertinggal

delete user[1]
console.log(user)
user.splice(1,1) //menghapus index 1
console.log(user)

