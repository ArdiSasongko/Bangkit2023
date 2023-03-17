//empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any

//Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen.

const promise1 = new Promise((resolve)=>setTimeout(()=>resolve(1),1000))
const promise2 = new Promise((resolve)=>setTimeout(()=>resolve(4),2000))
const promise3 = new Promise((resolve)=>setTimeout(()=>resolve(6),3000))
const promise4 = new Promise((resolve, reject) => setTimeout(()=>reject(new Error('ini error')),4000))
const promise5 = new Promise((resolve, reject) => setTimeout(()=>reject(new Error('ini error2')),5000))

Promise.all([promise1,promise2,promise3]).then((value)=>console.log(value))


//Promise.race() sama seperti .all(), tetapi hanya mengembalikan setTimeout tercepat

Promise.race([promise1,promise2,promise3]).then((value)=>console.log(value))

//Promise.allSettled() sama seperti dua diatas, semua promise akan dikembalikan nilainya, tetapi dalam bentuk array of object

Promise.allSettled([promise1,promise2,promise3,promise4]).then((value)=>console.log(value))


//Promise.any() sama seperti .race() tetapi .any() mengembalikan setTimeOut tercepat dengan status fulfilled, apabila semua rejected akan mengembalikan all rejected

//contoh mengembalikan tercepat dan fullfiled
Promise.any([promise1,promise3,promise4]).then((value)=> console.log(value))

//contoh rejected all
Promise.any([promise4,promise5])
  .then((value)=>console.log(value))
  .catch((err)=>console.log(err.message))
