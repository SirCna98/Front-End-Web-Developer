// debugger; 
// F12 debugger;
//------------------------------------------------------

<script src="..."></script>
// --------------------------------------------------------
// for testing
document.write("Hello");
// --------------------------------------------------------

window.alert("Hello");  // 
alert("aaa");
// --------------------------------------------------------
// for debugging
console.log("aa");
// --------------------------------------------------------
let a = 1;

// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.
// --------------------------------------------------------
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota"; 

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp
// --------------------------------------------------------
// typeof	Returns the type of a variable
// --------------------------------------------------------
// ===	equal value and equal type
// ==	equal to

// --------------------------------------------------------

// HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

// Event	      Description
// onchange	      An HTML element has been changed
// onclick	      The user clicks an HTML element
// onmouseover	  The user moves the mouse over an HTML element
// onmouseout	  The user moves the mouse away from an HTML element
// onkeydown	  The user pushes a keyboard key
// onload	      The browser has finished loading the page
// --------------------------------------------------------
// ( new )
// Comparing two JavaScript objects always returns false.

// --------------------------------------------------------
// string methods:
// Strings are immutable: Strings cannot be changed, only replaced.
// slice(start, end)
// substring(start, end)
// substr(start, length)
// replace(searchValue: string, replaceValue: string)
// replace(/Microsoft/g, "W3Schools");  regularexpresion
// trim()  '    aa    ' -> 'aa'
// String.charAt(pos: number)   ------   ------  -------
// String.charCodeAt(pos: number)   ------   ------  -------
// String[0] = 'A' no error but not work
// String.split("")  -> string to array of char
// String.includes('saaaas') -> true if possess


// string.search()
// ----------------------------------------------------------
// RegExp

/pattern/modifer

// ----------------------------------------------------------
// JavaScript Template Literals ` `

// let text =
// `<h2> The quick
// brown fox
// ${variable}        <<< ------ <<<<< ---- Interpolation
// the lazy dog </h2>`;
// ----------------------------------------------------------
// valueOf(object) -> 
// ----------------------------------------------------------

// function(value){...}
// Array.puse();
// Array.isArray(arr);
// arr instanceof Array;
// Array.join('ptr') -> return string of elements;
// Array.pop();
// Array.shift(); -> removes the first array element and "shifts" 
                    // all other elements to a lower index.
// Array.unshift(element) -> adds a new element to an array 
                    // (at the beginning), and "unshifts" older elements

// Array.splice(start_position, deleteCount,  element,...);
// Array.slice(strat, end) 
// Array.sort()
// Array.sort(compareFn?: ((a: T, b: T) => number))
    // for number -> arr.sort(function(a,b){return a-b;}); ascending
    // for number -> arr.sort(function(a,b){return a-b;}); descending

// Array.forEach(function)
// arr2 = arr1.map(function) function should return sth
// arr2 = arr1.filter(function) function should return true false
// element( like number) = arr1.reduce(function, initial-val-total)
        // function(total,value){return total+value};
// boolian <- arr.every(function) function should return true or false 
        // if all element is true it return true
// boolian <- arr.every(function) function should return true or false 
        // if at list one of element is true it return true
// index = arr.findIndex(function) function should return true or false 

// -----------------------------------------------------
// for in
// for (let key in object){
//         object(key);
// }
// for (let i in arry){
//         arry(i) ...    ---> array.forEach(func) is better
// }
//      for of 
//  for (point of points){
//         ...
//  }
// ---------------------------------------
// JavaScript Labels
// labelname: {statement}
// continue labelname;
// break    labelname;



// -----------------------------------------------------------------
// In JavaScript there are 5 different data types that can contain values:
        // string
        // number
        // boolean
        // object
        // function


// There are 6 types of objects:
        // Object
        // Date
        // Array
        // String
        // Number
        // Boolean

// And 2 data types that cannot contain values:
        // null
        // undefined
// -----------------------------------------------------------------
// Json.parse(textjson)
// ------------------------------------------------------------------


// try{
//         if .. -> throw "bad input"
// }
// catch(err){
//         document.getElementById("1").innerHTML = err;
// }
// finally{
//         regardless of try catch   always done
// }

// -------------------------------------------------------------------
"use strict";
// With strict mode, you can not, for example, use undeclared variables.
// not allowed to delete variable or function
// -------------------------------------------------------------------
// Arrow function  (this not work in object method) (not hiosted)
// let f = (input1,input2) => {...};
// let f = (input1,input2) => input1 * input2;   one line code no return keyword need
// let f = (input1,input2) => input1 * input2;   one line code no return keyword need
                                                        // one input no () need
// this is different in arrow function allway refer to object!

// ------------------------------------------------------------------
// class
// class Car {
//         constructor(name, year) {
//           this.name = name;
//           this.year = year;
//         }
//       }
// ---------------------------------------------------------------------
// Modules 
// This makes it easier to maintain the code-base.

// JavaScript modules rely on the import and export statements.
const name = "Jesse";
const age = 40;

export {name, age};
export default name;
// ---------------------------------------------------------------------
// Import named exports from the file person.js:

        // import { name, age } from "./person.js";

// Import a default export from the file message.js:

        // import message from "./message.js";
// -----------------------------------------------------------------------
// js class  inheritance
// class A 
// class B extends A{ ...}
// classes are not hoisted
// ---------------------------------------------------------------------
// constructor function  !!!!!!!!!!!!!!!
// JavaScript Object Constructors
// function Person(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//       }
// const myFather = new Person("John", "Doe", 50, "blue");
// ---------------------------------------------------------------------

// Prototype Inheritance:
// All JavaScript objects inherit properties and methods from a prototype:
// function Person(first, last, age, eyecolor) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eyecolor;
//       }
      
//       Person.prototype.nationality = "English";
// ---------------------------------------------------------------------


// JavaScript Iterators
// The iterator protocol defines how to produce a sequence of values from an object.

// An object becomes an iterator when it implements a next() method.

// The next() method must return an object with two properties:

// value (the next value)
// done (true or false)
// ---------------------------------------------------------------------
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}





// const person = {
//         firstName:"John",
//         lastName: "Doe",
//         display: function () {
//           let x = document.getElementById("demo");
//           x.innerHTML = this.firstName + " " + this.lastName;
//         }
//       }
      
//       let display = person.display.bind(person);
//       setTimeout(display, 3000);

// callbackfunction this is lost so use bind
// ---------------------------------------------------------------------
// JavaScript Closures

// let add = (function(){
//         let n = 0;
//         return function(){n+=1; return n;}
// })();

// add();
// add();

// ---------------------------------------------------------------------
//setTimeout(myFunction, 3000);  myFunction is CallBack
// setInterval(CallBack,1000);

// --------------------------------------------------------------------
// The await keyword can only be used inside an async function.
// async function funcName() {
//         object Promise
//         let a = await promise -> program stop hear
//         ...
// }

// funcName() -> async









