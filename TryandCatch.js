//Try untuk mngetes kode, catch apabila terjadi error maka catch yg menanggapi

try{
    console.log('tes code');
    errorCode; //ini merupakan code error
    console.log('tes code')
}catch{
    console.log('ada error')
}

//jika tidak terjadi error maka catch akan dilewati
try{
    console.log('tes code');
    //errorCode; //ini merupakan code error
    console.log('tes code')
}catch{
    console.log('ada error')
}

//name => nama error, message => pesan detail error, stack => urutan yang menyebabkan error

try {
    console,log('Tes');
    errorCode;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//try catch finaly

