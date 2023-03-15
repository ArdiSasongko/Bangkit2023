const names = ["Joko","Budi","Lenong","Telo","Pepi"]

const names2 = [
    {
        nama : 'Joko',
        usia : 24,
    },
    {
        nama : 'Budi',
        usia : 18,
    },
    {
        nama : 'Lenong',
        usia : 19,
    },
    {
        nama : 'Telo',
        usia : 18
    },
    {
        nama : 'Pepi',
        usia : 20
    }
]

//Array Map
const arrayMap = names.map((name)=>`${name}`)
console.log(arrayMap)

//Array Filter
const arrayFilter = names2.filter((young)=>young.usia < 20)
console.log(arrayFilter)

//Array Find
const arrayFind = names2.find(name => name.nama === 'Joko')
console.log(arrayFind)

