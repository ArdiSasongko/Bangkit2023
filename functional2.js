//FP = paradigma function

//pure function, nilai atau value tidak bisa (konstan) diubah contohnya adalah phi

function menghitunglingkaran(r){
    return 3.14 * (r * r);
}

console.log(menghitunglingkaran(14))

//imuttabillity

const user = {
    firstName : 'Ardi',
    lastName : 'Saosnhko', //typo
}

const createRename = (newlastName, user) => {
    user.lastName = newlastName
}

createRename('Sasongko',user)

console.log(user)

//disarankan menggunakan

const user2 = {
    firstName : 'Ardi',
    lastName : 'Saosnhko', //typo
}

const createRename2 = (newlastName,user2) => {
    return{...user2, lastName : newlastName}
}

const newName = createRename2('Joko',user2)

console.log(newName)


//rekursif, biasanya menggunakan iterasi for, do while. 

const countDown = start => {
    do {
      console.log(start);
      start -=1;
    }
    while(start > 0);
};

countDown(15)


//maka sekarang menggunakan

const hitungMundur = start => {
    console.log(start);
    if(start > 0) hitungMundur(start-1);
  };
  
hitungMundur(10);