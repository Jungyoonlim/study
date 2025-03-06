const str = "hello";
console.log(typeof(str));


const num = 6
console.log(typeof(num));

const car = {
    name: "boongboong",
    number: 4, 
}

console.log(typeof(car));

const car2 = new Object();
console.log(typeof(car2));

function greet(name){
    console.log("hello " + name)
}
greet("Alberto");

console.log(car);


// function expression
const greeter = function greet(name){
    console.log("hello " + name);
};
greeter("Alberto");

if (true){
    var x = 5;
}

console.log(x);



let carcar = {
    color: 'red',
};
let secondCar = car; 

car.wheels = 4;
console.log(carcar);
console.log(secondCar); 
console.log(carcar == secondCar);