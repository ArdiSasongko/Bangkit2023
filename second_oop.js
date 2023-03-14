//memberikan nilai langsung ke atribut blueprint

let i = 1

class Hewan{
    constructor(jenis,usia,keluhan,urutan){
        this.jenis = jenis
        this.usia = usia
        this.keluhan = keluhan
        this.urutan = `ke-${i++}`
    }
}

const babi = new Hewan("Babi",2,"Pusing")
console.log(babi)


//mengubah nilai atribut
babi.urutan = 4;
console.log(babi)


//agar nilai atribut tidak bisa diubah kita bisa menggunakan getter dan setter
//saat penamaan atribut pada constructor berikan tanda (_) di depan

let j = 1

class bunga{
    constructor(jenis,warna){
        this.jenis = jenis
        this.warna = warna
        this._nomor = `${j++}`
        this._kode = this.generatedCode()
    }

    get nomor(){
        return this._nomor;
    }

    //nomor yang berada di () berasal dari fungsi get, hal itu agar membuat nilai tidak bisa diedit
    set setnomor(nomor){
        console.log('nomor urut tidak bisa diedit')
    }

    //membuat method yang bisa digunakan di attribut
    generatedCode(){
        return `${Math.floor(Math.random()*100)}`
    }
}

const mawar = new bunga("Mawar","Merah")
console.log(mawar)
mawar.urutan = 3;