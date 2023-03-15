const names = ['Joko','Budi','Ler','Marsha','Luminaire']

const newnames = [];

//kita ingin mengisikan newnames berasal dari array names

for(let i = 0; i < names.length; i++){
    newnames.push(`${names[i]}`)
}

console.log(newnames)

//kode di atas terlihat sangat banyak, maka kita akan meringkasnya

const newnames2 = names.map((name)=>`${name}`)

console.log(newnames2)

