//membuat fungsi asyncronous
//jika proses asycronous selesai callback akan membawa nilai dari proses tersebut

const getuser = callback =>{

    setTimeout(()=>{
        users = ["Joko","Dono","Beni"]
        callback(users)
    },4000)
}

//membuat fungsi untuk memanfaatkan nilai

const usercallback = user =>{
    console.log(user)
}

//memanggil fungsi getuser menggunakan parameter usercallback
getuser(usercallback)

//untuk menangan callback membawa nilai error, maka kita harus membuat logika penanganya
//seperti berikut

const getUser2 = (isOffline,callback) =>{
    setTimeout(()=>{
         const user2 = ["Ardi","Afan","Ari","Aqilla","Agus"]
        //apabila error terjadi, maka callback membawa pesan error
        if(isOffline){
            callback(new Error('ini pesan error'),null)
            return;
        }

        callback(null,user2)
    },6000)
}

//maka fungsinya juga harus mengandung 2 parameter
const callback2 = (error,user) =>{
    if(error){
        console.log('Proced failed ', error.message);
        return;
    }
    console.log('Proced succes : ',user)
}

getUser2(true,callback2)
getUser2(false,callback2)