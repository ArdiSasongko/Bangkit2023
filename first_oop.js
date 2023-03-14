//membuat blueprint yaitu menggunakan function

function Manusia(nama,umur,tinggi,golDar){
    //membuat attribut dari parameter
    this.nama = nama
    this.umur = umur
    this.tinggi = tinggi
    this.golDar = golDar
}

//membuat method menggunakan prototype
Manusia.prototype.berlari = function(){
    console.log(`${this.nama} sedang berlari kencang`)
}

Manusia.prototype.berjalan = function(){
    console.log(`${this.nama} berjalan karena usianya ${this.umur}`)
}

//membuat object dari blueprint

const manusia1 = new Manusia('Joko',29,180,'AB')
const manusia2 = new Manusia('Ardi',21,170,"B")

console.log(manusia1)
//menggunakan method
manusia1.berjalan()


//membuat blueprint menggunakan class

class Kucing{
    constructor(jenis,warna,usia){
        this.jenis = jenis
        this.warna = warna
        this.usia = usia
    }

    //membuat method
    berlari(){
        console.log(`kucing jenis ${this.jenis} memiliki usia ${this.usia} tahun`)
    }

    makan(){
        console.log(`kucing jenis ${this.jenis} lagi makan dan memiliki warna ${this.warna}`)
    }
}

//membuat objec

const anabul = new Kucing('Persian','Abu-abu',5)
const kampung = new Kucing('Kampung','Orange',2)

console.log(anabul)

kampung.makan();
