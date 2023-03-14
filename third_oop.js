//pewarisan atau inheritance yaitu membuat class yang memiliki method yang sama dan memberikan sedikit perbedaan

//contoh pada sepeda, sepeda gunung dan sepeda balap yang mana keduanya merupakan sepeda tetapi memiliki kegunaan yang berbeda
//maka dibutuhkan superclass yang memiliki method yang dimiliki keduanya
//dan pada sub class berisi method khusus pada keduanya

class Sepeda{
    constructor(merek){
        this.merek = merek
    }

    kegunaan(jenis,model){
        console.log(`${this.merek} merupakan jenis sepeda ${jenis} memiliki bentuk yang ${model}`)
    }
}

//menggunakan extends untuk memanggil superclass

class sepBalap extends Sepeda{
    balap(jenis,model){
        this.kegunaan(jenis,model)
    }
}

class sepGunung extends Sepeda{
    gunung(jenis,model){
        this.kegunaan(jenis,model)
    }
}

//menggunakan sub class
const balap = new sepBalap("Polygon")

balap.balap("Balap","Ramping")

