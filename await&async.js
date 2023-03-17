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

//menggunakan async dan await, gunakan async diawal fungsi

async function watchMovie(a){
    try{
        const money = await withDrawMoney(a);
        const ticket = await buyTicket(money);
        const result = await goInside(ticket)

        console.log(result);
    }
    catch(err){
        //console.log(err.message);
        //dapat menggunakan throw
        throw err
        //
    }
}

watchMovie(9)
  .then((result)=>console.log(result))
  .catch((err)=>console.log(err.message))



