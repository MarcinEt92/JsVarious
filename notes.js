/*
You cannot re-declare a variable declared with let or const.
This will not work:
let carName = "Volvo";
let carName;
But I would work with var


If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let x = "5" + 2 + 3; // equals 523 type string
let y = 2 + 3 + "5"; // equals 55 type string


Dolar Sign '$' is often used as an alias for the main function in a JavaScript library
Underscore (_)  is used as an alias for "private (hidden)" variable


let variables have to be declared before use,
if I type let a, it's value is undefined


const variables have to be initialized just when they
are declared.
const defines a constant reference to a value.
I can change/add the elements of constant array or properties of const object


In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.


*/