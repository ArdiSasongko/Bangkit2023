const evenumber = []

for(let i = 0; i <= 100; i++){
    if(i%2===0){
        evenumber.push(i)
    }
}
console.log(evenumber)

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
