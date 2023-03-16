class ValidationsError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError"
    }
}

const json = '{ "age": 30 }';

try {
    const user = JSON.parse(json)

    //ini merupakan custom error
    if (!user.name){
        throw new ValidationsError("'name' required")
    }

    if (!user.age){
        throw new ValidationsError("'age' required")
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError){
        console.log(`'JSON syntax error' : ${error.message}`);
    } else if (error instanceof ValidationsError){
        console.log(`Data invalid ${error.message}`)
    } else if (error instanceof ReferenceError){
        console.log(`${error.message}`)
    }else{
        console.log(`${error.stack}`);
    }
}