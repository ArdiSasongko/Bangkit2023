//map mirip dengan objek, yang membedakannya value dapat berbeda"

//Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini
//nilai pertama bersifat key, dan nilai kedua bersifat value
const map = new Map([
    [1, 'is a number'],
    ['1', 'is a string'],
    [true,'is a boolean']
]);

console.log(map)

//mengambil nilai dari map (get), dan menerapkan nilai ke map (set)

const city = new Map([
    ["Jakarta","Jakarta"],
    ["Yogyakarta","Jogja"],
    ["Riau","Pekanbaru"]
])

console.log(city.get('Jakarta'))
city.set("Sumatera Selatan","Palembang")
console.log(city)