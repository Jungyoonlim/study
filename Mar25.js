class Person { 
    constructor (name, age){
        this.name = name;
        this.age = age; 
    }
    static info(){
        console.log("I am a Person class, nice to meet you!");
    }
    printAge() {
        console.log(`My age is ${this.age}!`);
    }
    set nicknames(value){

    }
    get(){

    }
}

const alberto = new Person("Alberto", 26);

Person.info();
alberto.printAge();

function* gen(){
    try {
        yield "Trying...";
        yield "Trying harder...";
        throw new Error("Critical failure!");
        yield "Trying even harder...";
    }
    catch (err){
        console.log("Caught error:", err.message); 
    }
}

const myGenerator = gen();
console.log(myGenerator.next());  // { value: "Trying...", done: false }
console.log(myGenerator.throw(new Error("External error")));  // Triggers catch block

