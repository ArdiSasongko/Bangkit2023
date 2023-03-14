function minimal (a,b){
    if(a<b){
        return a
    }else if(a>b){
        return b
    }else{
        return a
    }
}

console.log(minimal(9,9))

function findindex(array,number){
    for(let i=0;i<=array.length;i++){
        if(array[i]===number){
            return i
        }
    }
    return -1
}

console.log(findindex([1,2,3,4,5],2))

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));