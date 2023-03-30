//variables
var a; //declaracion
var b = 'b'; //declaracion y asignacion
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion


//GLOBAL SCOPE
var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Ejercicio 2
function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);