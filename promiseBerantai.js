//promise berantai dijalankan secara urut
//hal ini digunakan untuk Seluruh tahap yang kami jelaskan adalah Promise dan dapat dijalankan secara berantai seperti ini

//contoh kita ingin menonton bioskop maka

//1. mengambil uang 

function withDrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(amount>150){
                reject(new Error('Uang melebihi batas maksimal penarikan!'));
            }
            resolve(amount)
        },1000)
    })

}

//2. membeli tiket
function buyTicket(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(money<10){
                reject(new Error('uang tidak cukup untuk membeli tiket!'))
            }
            resolve('ticket-1')
        },2000)
    })
}

//3. Masuk ke bioskop
function goInside(ticket){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!ticket){
                reject(new Error('Tidak ada tiket, dilarang masuk'))
            }
            resolve('Silahkan masuk')
        },3000)
    })
}

//membuat fungsi yang menampung semua promise secara berurutan

function watchMovie(a){
    withDrawMoney(a)
      .then((money)=>{
        return buyTicket(money)
      })
      .then((ticket)=>{
        return goInside(ticket)
      })
      .then((result)=>{
        console.log(result) 
      })
      .catch((err)=>{
        console.log(err.message)
      })
}

watchMovie(151)
watchMovie(9)
watchMovie(11)