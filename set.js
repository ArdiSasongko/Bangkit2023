//set merupakan kumpulan nilai, yang berisi nilai unik, tidak ada nilai yang duplikasi

const numberset = new Set([1,4,2,8,1,1])
console.log(numberset)

//add() = untuk menambhkan nilai, add hanya menerima satu argumen
numberset.add(6)
console.log(numberset)

//delete() = menghapus, nilai yang dihapus adalah nilai sebenarnya bukan index
numberset.delete(4)
//maka yang dihapus nilai 4, bukan index ke 4
console.log(numberset)
