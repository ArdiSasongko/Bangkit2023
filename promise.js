//promise

const getuser = isOffline =>{
    new Promise((resolve, reject) => {
        const data = ["joko","widodo","prabowo","subianto"]
        setTimeout(()=>{
            if(isOffline){
                reject(new Error('cant retrive, offline (error)!'))
                return;
            }
            resolve(data)
        },3500)
    })
}

//Promise akan memiliki fungsi .then dan .catch yang digunakan untuk mengambil nilai yang dibawa oleh resolve dan reject.

getuser(true)
getuser(false)
