"use strict";
//Javascript automatically inserts ; so you don't need them but if there's a bug it might be because it's inserting them wrong.
//Probably better just to do it yourself, but I know I'm forgetting to do that a lot already... just watch out for bugs.
//You can include multiple statements; on one line; when seperated by ;

//JS ignores whitespace, so use as much as you need for readability.
//You can use line breaks too, to reduce length of long lines of code.

//Get element by id, inner html is the content, can also change style/etc
// Use functions with onclick to change content, visibility, style, etc
function changeText() {
    document.getElementById("js1").innerHTML = 'Changed with JS';
}

/* Document.write should only be used for testing; will delete loaded html.
document.write('Document write'); */

//Alert: creates a small alert window with the content, user clicks ok to continue, kinda annoying
// alert('This is an alert');

//Console.log: for debugging, must open web dev tools > console to see them
console.log('Logged');

//LITERAL values do not change, vs VARIABLES (you know what those are)
//You can declare and then assign variables or declare and assign on the same line
var x, y, z;
var x = 0;
var b = 4;

//var is always global scope, can't be local (to if, for, etc, exception is functions)
//var can be redeclared ie var x = 7; var x = 12; without warning programmer they already used that variable (declaring is different than assigning)
//var can be declared anywhere and be used above the declaration, but assignment won't be used until that line is reached

//const will not allow reassigning of values, has local scope, use if value will not change, must assign value at declaration
const j = 10;
//you can reassign values of a const object:
const character = {name: 'Bob', attack: 10, cool: 'No'};
// character = 7; //this doesn't work
console.log(character.name); //Bob
character.name = 'Alex'; //this works
console.log(character.name); //Alex
//you can reassign and add values to a const array:
const mylist = [0, 1, 2, 3];
console.log(mylist);
mylist[2] = 9;
console.log(mylist);
mylist.push(213);
console.log(mylist);
mylist.pop();
console.log(mylist);

//let will not allow redeclaration , won't work until assigned, and has local scope (won't be accessed or seen as changed outside the block its set in)
//let is the standard unless you really need a global var declared in an if block for some reason.
let a = 'Let';

// Concatenate strings with +
console.log("String1 " + "string2");

//MATH
//Math precedence: parentheses (), increment/decrement ++/--, exponents **,
//multiplication *, division /, modulus (remainder after division) %,
//addition +, subtraction -, left to right order

//JS only has one number type (not floats and ints, just numbers)
//Booleans are not capitalized (true and false, not True)
//Arrays use [ ] and first item has an index of 0
//Objects use { } and name: value, name: value, etc pairs

//Use typeof to find the type of something
typeof("butt") //string
typeof(0) //number
let c;
typeof(c); //undefined (not assigned)
c = 5;
typeof(c==5); //boolean
typeof(null); //object
//Objects and arrays and null return as object
typeof(changeText); //function

//You can empty a let or object by setting to null or undefined
//Undefined and null are equal in value but different in type


//OBJECTS
//Objects have properties (character.name) and methods (character.action()) which are functions of the object
//You can also access properties using [ ] (character["name"])
console.log(character.name)
console.log(character["name"])
//Access properties and methods from within a method using this.property
character.cool = function cool() {
    console.log(this.name + " is cool.");
}
//Call the method using object.method()
character.cool();

//Don't create String, Number, or Boolean objects with let variable = new String(); It slows down code and object is unnecessary for simple types.
//Comparing (== or ===) objects will always return false even if they are identical

//EVENTS
//events: on load (page), on input (forms), on click (buttons), etc
//html element contains onevent="javascript code"
//example: <button type="button" onclick="changeText()">Change the text</button>
//To have an element reference itself, use this instead of getElementById

//Events: onchange (html element changes), onclick, onmouseover, onmouseout, onkeydown, onload (browser finishes loading), etc etc

//STRING STUFF////////////////////////////////////////////////////////////////////////////////////////////////////
//Strings cannot be changed, only replaced. Methods return a new string, do not change the old one.
//To get the length of a string:
console.log("Butt butt butt butt".length);
//Use the backslash \ (not /) to escape code interpretation of a character such as another "
console.log("This is an example of a \"quote\"");
//Use string addition to break up a long line of code without breaking up the string itself
console.log("Text part one a" +
"nd part 2");

//STR POSITIONS
//Indexof() returns the position of a string in a string (like it's an array)
console.log("Butts".indexOf("s"));
//You can also use lastIndexOf() to find the last position
//If it's not found, -1 will be returned.
//You can include a second position (number) that is where to start looking.
//LastIndex searches backwards to the beginning of the string, IndexOf searches forwards to the end of the string
console.log("Butts".lastIndexOf("s", 3)); //will return -1 because s is not included in the search due to second arg.
//IndexOf can't take regular expressions
//Search can take reg express, but can't take the second arg (where to start looking from)
console.log("Butts".search("t"));

//STRING EXTRACTION
//These methods select part of a string and return it as a new string
//Slice takes start position (included) and end position (not included)
//If you don't add the second parameter, it'll just go to the end of the string.
console.log("Butts are pretty neat");
console.log("Butts are pretty neat".slice(5, 12));
//Negative numbers count backwards from the end of the string
console.log("Butts are pretty neat".slice(-5, -1));
//substring is the same, but won't take negative numbers.
console.log("Butts are pretty neat".substring(5));
//substr is like slice, but the second parameter is the length of the slice, not the end position.
//Ommitted, goes to end of string.
console.log("Butts are pretty neat".substr(3, 8));

//STRING REPLACEMENT
//Returns a new string that replaces the first instance of the given string with a new string (case sensitive)
console.log("Butts are pretty neat".replace("Butts", "Flowers"));
//You can use regular expressions (no quotes) to make it case insensitive:
console.log("Butts are pretty neat".replace(/BUTTS/i, "Murders"));
// or to replace all instances (global):
console.log("Butts are butts are butts".replace(/are/g, "aren't"));

//CHANGE CASE
console.log("Butts are pretty neat".toUpperCase());
console.log("BUTTS ARE PRETTY NEAT".toLowerCase());

//CONCAT does the same thing as +
console.log("Butts are pretty neat".concat(" and so are french fries", " and potatoes", " and mental breakdowns"));

//TRIM removes white space from beginning and end of a string
console.log("     Butts     ".trim());

//PADSTART and PADEND adds padding to beginning or end of a string to make it the length of arg 1, using arg 2
console.log("99".padStart(4, 0));
console.log("5".padEnd(4, 0));

//Return character at specific index
console.log("Butts are pretty neat".charAt(7));
//Returns Unicode character at index
console.log("Butts are pretty neat".charCodeAt(7));

//Convert strings to an array with split
let myString = "Fish are cool";
//Returns an array Fish, are, cool by splitting every space " "
console.log(myString.split(" "));
//You can also split based on other characters: split(",") ("z") ("-")
//An empty "" will split each character
console.log(myString.split(""));
//If you don't include an argument for the seperator, an array will be returned with the whole string in index 0.

//NUMBER STUFF/////////////////////////////////////////////////////
//Whole numbers are precise up to 15 digits
//Maximum number of decimals is 17, after that use scientific notation
//Floats (decimals) are not precise, so you should use whole numbers with division to do math
console.log(5 + 3);
console.log(.2 + .1); //returns .30000004, which is wrong
console.log((.2 * 10 + .1 * 10) / 10); //returns .3, which is right
//str + number returns a string
//math is evaluated left to right, so num + num + string would equal sum + string
//JS will convert string to numbers if possible for math operations: *, / etc
console.log("100" * 10); //this works, returns 1000
//JS will return NaN (not a number) if it can't convert the string. Ironically, NaN's type is number
console.log("i" / 100);
//Use isNaN() to check if something (like user input) is a number
console.log(isNaN("butts")); //returns true
//If you use NaN in math, the result will be NaN, or could concatenate
console.log(NaN + "5"); //returns Nan5 (str)

//Division by 0 returns Infinity or -Infinity
//A number outside the largest possible or smallest possible range generates infinity or -infinity
//typeof Infinity returns number

//Normal numbers are base 10
//Numeric constants are seen as hexadecimals if preceded by 0x (base 16)
//Don't precede numbers with 0, JS interprets as octal (base 8)
//Binary is base 2 (0s or 1s)
//Use tostring() to change the base
let num=32;
console.log(num.toString(2)); //converts to base 2, binary

//Don't convert numbers to objects using let x = New number(10) for the same reasons as with strings

//Without an argument, toString() just converts num to string with (literals), variables, or expressions
console.log((123).toString());
console.log(num.toString());
console.log((1+3).toString());

//toExponential() returns rounded number using scientific/exponent notation, takes arg for number of places after decimal.
//Without arg, JS will not round number
console.log((32112331).toExponential());
console.log((22124142).toExponential(2));

//toFixed(num) returns a rounded string with arg that decides number of decimals (good for $$)
console.log((421.1292142).toFixed(2));

//toPrecision returns a string with num with specific length (will add decimals or convert to notation)
console.log((4).toPrecision(6));
console.log((4953342284).toPrecision(6));

//Convert variables to numbers (all data types)
console.log(Number("butts")); //NaN
console.log(Number(true)); //1
console.log(Number(new Date("2021-4-15"))); //returns number of milliseconds since 1.1.1970
//Convert strings to floats or ints, only first number, spaces allowed
console.log(parseFloat("-9.90 10")); //returns -9.9
console.log(parseInt("321.7")); //retn 321 (rounded down!)

//Number.MAX_VALUE returns largest possible num in JS
//Number.MIN_VALUE returns smallest
//Number.POSITIVE_INFINITY returns infinity (overflow)
//Number.NEGATIVE_INFINITY
//Number.NaN
//Using on a variable or expression will return undefined, even if a number

//ARRAYS////////////////////////////////////////////////////////////////////////
//Don't use New, just make the array let x = [0, 1, 2, 3];
//Arrays use number indexes x[0] to access its elements, while objects use name:value pairs to access its members
//You can have variables, functions, objects, arrays, etc in arrays
//Array properties
let myNum=10;
let myArray = [myNum, "butt", true, -1.12];
//array.length returns number of elements
console.log(myArray.length); //returns 4
//Access using negative numbers: last using length -1
console.log(myArray[myArray.length - 1]); //returns -1.12
console.log(myArray[3]); //same thing

//Loop through an array using for or foreach loops
let myText="My array contains: ";
let i = 0;
for(i = 0; i < myArray.length; i++) {
    myText += myArray[i] + " ";
}
console.log(myText);

//foreach is an Array method that takes a function argument 
function myFunction(val) {
    thisText += val + " "
}
let thisText="My array contains: ";
myArray.forEach(myFunction);
console.log(thisText);

//Add new elements
myArray.push("97");
myArray[myArray.length] = "limes"; // this works bc length is one more than the index as it doesnt start with 0
console.log(myArray);
//Adding elements with higher indexes than current length creates placeholder elements with undefined value
myArray[9]="Dissociation"; //creates 3 empty slots
console.log(myArray); //shows 3 empty slots in array
console.log(myArray[8]); //accessing an empty slot returns undefined

//Javascript does not have associative arrays with named indexes
//Named indexes will convert the array into an object
//Methods and properties will then do the wrong things (length returns 0, arrayToObject[0] returns undefined, etc)
//Use arrays for numbered indexes, objects for named indexes

//The New keyword with only one argument does not create an array with that argument in index 0
//It creates an array with that many undefined elements
//Do Not use New

//To check if something is an array:
console.log(Array.isArray(myArray)); //true
//Or, for old browsers:
console.log(myArray instanceof Array); //true

//Array methods
//toString() returns a string of comma (but not space) seperated elements of the array
console.log(myArray.toString());
//join does the same thing but you choose the seperator
console.log(myArray.join(", "));

//deleting and adding items
//pop deletes the last item from an array and returns it
console.log(myArray.pop()) //returns Dissociation
console.log(myArray); //array no longer contains Dissociation
//push adds a new element to the end of an array and returns the new length
console.log(myArray.push("Healthy habits")); //returns 10
console.log(myArray); //array now contains Healthy Habits
//shift deletes the first item and shifts all items -1 index, returns deleted item
console.log(myArray.shift()); //returns 10, which was the old item
console.log(myArray);
//unshift adds a new element at the start of the array and shifts all items +1 index, returns new length
console.log(myArray.unshift("potato")); //returns 10
console.log(myArray); //array now contains potato (as all good things do)
//delete changes the element to undefined
delete(myArray[1]); //changes "butt" to undefined
console.log(myArray);

//You can also set the length of the array (which will create holes if too long
//or delete any indexes over the length you have set)
//current length is 10
myArray.length = 5; //removes anything after array[4]
console.log(myArray);

//You can use splice to add or remove items from an array. It will return an array of the deleted items
//splice(index to begin, number of elements to remove, elements, to, add)
console.log(myArray.splice(2, 1, "bacon", 1.43, true)); //removes true (index 2), adds 3 elements, returns true (element deleted)
console.log(myArray);
//To just delete items, only use the first two arguments
myArray.splice(1, 1); //deletes index 1 (empty)
console.log(myArray);

//use concat to combine arrays, strings, and other arrays (returns new array, doesn't modify existing)
let myArray2 = ["cheese", 0, "150"];
console.log(myArray.concat(myArray2, "butts")); //creates new array combining all values
console.log(myArray); //unmodified!

//slice copies part of an array into a new array. Does not modify original. Without 2nd arg, goes to end of array
console.log(myArray.slice(2, 4)); //start, end (num) - end not included

//reverse reverses the index order of all items (returns changed array, not new one)
console.log(myArray.reverse());
//sort orders elements alphabetically, using unicodes if not alphabetical - numbers by first digit - 10 200 3, string numbers, strings, bools
console.log(myArray.sort());
//sort takes an argument - function determining order. This one sorts numerically
let myArray3 = [1, 2, -325, 0, 2, 89, -1];
console.log(myArray3);
console.log(myArray3.sort(function(a, b){return a - b}));
//function takes parameters a and b, then subtracts b from a
//if negative, a is before b
//if 0, no change to order
//if positive, b is before a
//Produces weird results when used on strings and nonnumerics!
console.log(myArray.sort(function(a,b){return a-b}));

//to sort in random order (not truly random)
console.log(myArray3);
myArray3.sort(function(a,b){return 0.5 - Math.random()}); //randomly returns 0.5 -1 +1 or something in between
console.log(myArray3); //this will be random each time

//to randomize properly
let m;
let k;
for(i=myArray3.length - 1; i > 0; i--) {
    m=Math.floor(Math.random() * i);
    k=myArray3[i];
    myArray3[i] = myArray3[m];
    myArray3[m] = k;
}
console.log(myArray3); //this will be even more random each time

//To find the min and max value, sort numerically. [0] is now min, [array.length-1] is now max
//This is inefficient when working with big arrays

//To find max without sorting:
console.log(Math.max.apply(null, myArray3));
//To find min without sorting:
console.log(Math.min.apply(null, myArray3));

//You can also create a function:
function myArrayMax(ary) {
    let len=ary.length;
    let max= -Infinity;
    while (len--) {
        if(ary[len] > max){
            max=ary[len];
        }
    }
    return max;
}

function myArrayMin(ary) {
    let len=ary.length;
    let min=Infinity;
    while(len--){
        if(ary[len] < min) {
            min = ary[len];
        }
    }
    return min;
}

console.log(myArrayMax(myArray3));
console.log(myArrayMin(myArray3));

let objArray = [
    {name:'Bob', year:2914},
    {name:'Sally', year: 2000},
    {name:'Harriet', year: 2014}
]

console.log(objArray);

//creating a copy bc otherwise sort will sort the array and previous console log will reflect that
let objArrayCopy = [
    {name:'Bob', year:2914},
    {name:'Sally', year: 2000},
    {name:'Harriet', year: 2014}
]

let objArrayCopy2 = [
    {name:'Bob', year:2914},
    {name:'Sally', year: 2000},
    {name:'Harriet', year: 2014}
]

//how to sort array of objects: compare properties with numbers
console.log(objArrayCopy.sort(function(a, b){return a.year - b.year}));

//To compare properties that are strings (sort alphabetically):
console.log(objArrayCopy2.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if(x < y){return -1;}
    if(x > y){return 1;}
    return 0;
}));

//foreach is an Array method that takes a function argument and loops over each index of an array, changing the array
//(this one doesnt directly affect the array, instead creating a new string)
let argh= [0, 4, 21, -5, 2]; //create array
let list=""; //empty string to hold values
console.log(argh); //prints argh array
argh.forEach(addMe); //performs addMe() on argh array
function addMe(value) { //adds each index + 10 to string
    list = list + (value+10);
}
console.log(list); //prints long number

//map is an Array method that takes a function and loops over each index, creating a new Array
//Doesn't change indexes with no values
console.log(argh.map(multiply));

function multiply(value){
    return value * 2;
}

//filter creates a new array with elements that pass a test
console.log(argh.filter(test));

function test(value) {
    return value > 0;
}

//reduce runs a function on each element to create a single value (for example, adding all numbers)
console.log(argh.reduce(subtract));
//You can provide an initial value for total
console.log(argh.reduce(subtract, -1000));
//By default it works from left to right. To go right to left:
console.log(argh.reduceRight(subtract, -500));

function subtract(total, value) {
    return total-value;
}

//every checks if all elements pass a test
console.log(argh.every(test)); //returns false

//some checks if some elements pass a test
console.log(argh.some(test)); //returns true

//indexOf searches for a value and returns its index, returns -1 if not found. You can also provide a position to start searching from
console.log(argh.indexOf(-5)); //returns 3
console.log(argh.indexOf(-5, 4)); //returns -1, started searching after position
//if item is present more than once, returns only 1st index
//lastIndexOf returns last index
console.log(argh.lastIndexOf(-5)); //returns 3

//find returns the value of the first element to pass a test
console.log(argh.find(test)); //returns 4, the first value > 0
//findIndex returns the index of the first element to pass a test
console.log(argh.findIndex(test)); //returns 1, index of 4

//DATES//
//date can either be the current date/time, or you can provide parameters
//one parameter will be treated as milliseconds, otherwise
//use two - seven parameters: year, month, day, hour, minute, second, m/s
//months are counted 0 - 11 bc Javascript is bad
console.log(new Date(2019, 8, 3));

//used in HTML, it will be converted to a string automatically, just as below
let mydate=new Date();
console.log(mydate.toString());

//UTC string:
console.log(mydate.toUTCString());

//To Date String (day and date only)
console.log(mydate.toDateString());

//To ISO string:
console.log(mydate.toISOString());

//JS accepts dates as YEAR-MO-DA, MO/DA/YEAR, Mon DA YEAR, or DA Mon YEAR (last two: month is written, not numbered)
//International Standard is preferred
console.log(new Date("2021-01-20")); //this displays as 1/19 due to time zone ??
//Can be written without day, or without month and day
console.log(new Date("2021-5")); //Shows as 4/30
console.log(new Date("2019")); //shows as Dec 2018
//Javascript will determine time zone based on user's browser

//To convert datestring to date: Date.parse to get m/s, then new Date(m/s)
let ms = Date.parse("2021-03-12"); //displays as 3/11
let d = new Date(ms);
console.log(d);

//Methods:
console.log(mydate.getFullYear()); //returns XXXX year
console.log(mydate.getMonth()); //returns 0-11 number month
console.log(mydate.getDate()); //returns 1-31 number day
console.log(mydate.getHours()); //returns 0-23 number hour
//getMinutes(), getSeconds(), getMilliseconds()
console.log(mydate.getTime()); //gets milliseconds since 1970 (use to create new Date)
console.log(mydate.getDay()); //returns 0-6 number day, Sunday is 0

//getUTCDate, etc, for UTC versions
//You can create an array of names for days, months, etc and access it using these.
let myDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(myDays[mydate.getDay()]);

//setDate methods let you set certain parameters for a Date object
//setDate, setFullYear, setHours, etc - this sets the day of the month
mydate.setDate(5);
console.log(mydate.getDate());

//Math is an object with constants (Math.PI)
//With methods (Math.round(5.24)) - ceil rounds up, floor rounds down, trunc returns just the integer
//sign returns -1, 0, or 1 depending on neg/positive
//pow (power), sqrt (square root), abs (absolute value), sine, cos, min, max
//random, log (logarithm), etc

//Booleans
//If it has a value, it returns true
//If it doesn't have a value (ie 0, empty strings, undefined, null, NaN), it returns false

//Comparisons/if thens/bools
//Conditional ternary operator
//var = (condition) ? true result : false result
let veggies = 2;
let enough = (veggies > 1) ? 'Good job':'Eat more veggies'; //passes and enough now holds 'Good job'
console.log(enough);

//comparing data of different types may result in an incorrect comparison (esp strings vs numbers!)
//make sure to cast your values and check your input ie
let numero=Number("347");
if(isNaN(numero)) {
    console.log('That\'s not a number!');
}
else {
    console.log(numero + 3);
}

//switch: each case evaluates to see if true, then runs the code block for that case.
//If none are true, runs default code block
//Break exits out of the switch. If break is not included, it will run following blocks even if evaluation is false!
//You can use this to have multiple cases run the same code block:
//Switch cases use exact comparison (===) - types must match!
//switch(expression) {
    //case 1:
        //some code
        //break;
    //case 3:
    //case 2:
        //some code
        //break;
    //default:
        //some code
        //break not needed for the last block
//}

//FOR LOOPS
//you can include multiple statements in statement 1, separated by commas, or none (; statement 2; statement 3)
//for(execute once, before code block; while this statement is true; run this after every execution of the code block) {}
let len, text;
for(i=0, len=10, text=""; i < 5; i++) { //multiples in statement 1
    text += len + i;
}
console.log(text);

//or, if variables are declared before for loop, no statements in statement 1
for(; i < 5; i++) {
    text += len + i;
}
console.log(text);

//statement 2 is also optional, but without it loop goes forever unless you use a break in the loop code
//statement 3 is optional, but you would have to increment your variables inside the loop
for(; i < len;) {
    text += i + len;
    i++;
}
console.log(text);

//FOR IN LOOPS iterate through properties of an object
// for(key in object){}
let char={name:'Bob', age:43, color: 'blue'} //create object
let e = 0; //create iterated number
let words=''; //create variable to hold info
for(e in char){ //for number key in object
    words+=char[e] + ' '; //add value of object[key] to text
}
console.log(words);

//you can use for in on arrays, but if the index order is important, use for, for of, or Array.forEach() (above)
//for(variable in array) {}

//for/of loops through the values of an iterable object - arrays, strings, maps...
//for(variable of iterable) {}
//you can declare variable in the for statements: let x of array...

//arrays:
let words2 = '';
for(let f of myArray2) {
    words2+= f + ' ';
}
console.log(words2);

//strings:
let g = '';
for(let f of words2) {
    g += f + ' ';
}
console.log(g);

//while loops execute as long as condition is true. Make sure to increase iterable in code block!
//while loops are basically for loops without statements 1 and 3
let h = 5;
while(h < 10) {
    h++;
}
console.log(h); //10

//do while will execute at least once, even if the condition returns false!
do{
    h++;
}
while(h < 10);
console.log(h); //11

//BREAK AND CONTINUE
//break exits the loop
//continue skips over one iteration of the loop
let text2;
for(i=0, text2=''; i < 10; i++) {
    if(i == 8) {break;} //break the loop when i is 8
    if( i == 3) {continue;} //skip the code if i is 3 and go to the next one
    text2+= i + ' ';
}
console.log(text2); //0 1 2 4 5 6 7 (skips 3, breaks at 8)

//you can use labels in nested loops to specify which loop to break out of, but it seems like developers consider it bad practice
// label: code or:
//label:
//code
let text3='';
outer: for(i=0; i < 5; i++) {
    inner: for(k=0; k < 5; k++) {
        if(k==3){continue outer;} //skip this iteration of outer loop and go to the next
        if(i==4) {break inner;} //break out of the inner loop completely
        text3+=k + ' ' + i + ' ';
    }
}
console.log(text3);

//Here, 'Tree' will not be printed
//you can also use it to break out of any labeled code block (between { })
myblock:
{
    console.log('One');
    console.log(2);
    break myblock;
    console.log('Tree');
}

//converting data types:
console.log(Number('123'));
console.log(String(1324));

//+ can be used to convert a variable to a number!
let l = '34';
let n = + l;
console.log(n);

//JS will automatically convert types, but not always the way you expect

//Regular expressions are characters that form a search pattern, can be used for text search and replace
// syntax: /pattern/modifiers;
//modifiers: i (case insensitive), g(global - continues to search after 1st match), m (multiline search ie search for something at the beginning of each line)
//brackets can be used in the pattern to find a range of characters: [abc], [3-6], [a|9|%]
//meta characters can be used in the pattern to find: digits \d, whitespace \s, beginning or end \bWORD or WORD\b
//quantifiers can be used in the pattern to define quantities: n+ to find words with 1 or more n,  n* for 0 or more, n? for 0 or 1

//To search for the position of text within a string: text.search('what to search for')
//Not found returns -1
let mytext2='Once upon a time';
console.log(mytext2.search('a')); //returns position 10
//using modifiers: this is case insensitive
console.log(mytext2.search(/A/i)); //returns 10

//To replace a certain text within a string: text.replace('search', 'replace');
console.log(mytext2.replace('Once', 'Twice')); //returns changed string
console.log(mytext2); //original string is unchanged fyi
//using modifiers:
console.log(mytext2.replace(/once/i, 'Thrice'));

//RegExp is an object (regular expressions) with methods, properties, etc
//use test() to return true or false if something contains what you're searching for
let expression = /[0-2]/;
let num2 = 910;
console.log(expression.test(num2)); //true: num2 contains 0 and 1

//you don't have to use variables fyi
console.log(/[abc]/i.test('Ass')); //true: contains A and is case insensitive

//exec() returns found text from search as an object. Not found: returns empty (null) object
let myExec= /a/.exec('Aaaaaaaaaahhhh!!');
console.log(myExec);
// ​returns an object: myExec {0: "a", groups: undefined, index: 1, input: 'Aaaaahh!', length: 1}

//ERRORS
//TRY tests a code block for errors
//CATCH handles the errors
//THROW creates custom errors
//FINALLY executes code after try and catch, regardless of result

//commented out try catch and throw as the error was stopping future code from running
// try{
//     cansel.log('This will not work! It is misspelled.');
// }
// catch(myerror) {
//     console.log(myerror.message); //displays 'cansel is not defined'
// }

//normally javascript will stop and throw an exception/error when there's a problem
//JS creates an Error object with properties name and message
//Use throw to create custom error messages!

//throw "Your code is messed up!"; //displays Uncaught Your code is messed up!

//this function works with the HTML to validate input (should be a number between 1 and 3)
//use finally to run code after testing, it will run even if there's an error

function validate() {
    let errorMessage = document.getElementById("error");
    let myInput = document.getElementById("validate").value;
    let myFinal = document.getElementById("finally");
    myFinal.innerHTML = "";
    errorMessage.innerHTML = ""; //clear errormessage content
    try {
        if(myInput == "") throw "Please enter something.";
        if(isNaN(myInput)) throw "That's not a number.";
        myInput = Number(myInput); //convert type to Number
        if(myInput < 1) throw "Please enter a number 1 or higher.";
        if(myInput > 3) throw "Please enter a number 3 or lower.";
        }
    catch(err) {
        errorMessage.innerHTML = err;
        }
    finally {
        myFinal.innerHTML = 'You input: ' + String(myInput);
        }
}
"You can combine this with html validation"
/* <input id="demo" type="number" min="5" max="10" step="1"> */

// Always declare all variables at the beginning of their scope (function, block, if, global)
// Don't create global variables unless you have to (code here is for testing ideas only)

// declare "use strict"; at the beginning of your <script> or JS file
// turns bad practice into errors you must fix, helps you write more secure JS, stops you from doing some dumb shit
// when i added use strict to my file, I found a bunch of undeclared variables!

// this refers to the object it belongs to
// method: refers to owner of method, such as character object with cool method at top
//     cool method accesses character.name using this.name!
//     character.cool = function cool() {console.log(this.name + " is cool.");}
// alone (not in anything): refers to Global object [object Window]
// function: refers to Global object [object Window]
// function in strict mode: this is undefined
// event handlers (HTML): refers to HTML element receiving the event ie <button onclick="this.style.color='red'">
// In an object > method, this refers to the object the method belongs to

// Shortening functions with arrows
let example = function() {
    return "Hello World!";
  }

console.log(example());

//the word function is not necessary
let example1 = () => {
    return 'This is an example';
}

console.log(example1());

//if you only have a return statement, you can remove brackets and 'return'
//only works with functions with ONE statement
let example2 = () => 'This is an example';
console.log(example2());

//parameters can be included in the parentheses as normal
let example3 = (words) => 'This is an ' + words;
console.log(example3('aardvark'));

//If you only have one parameter, you don't need parentheses!
let example4 = words => "This is an " + words;
console.log(example4('avocado'));
console.log(example4('eel'));
//this doesn't work on arrow functions, so if you need to use this, write a normal function

//a class is a template for creating objects.
//always add a constructor method (auto called when new object is created, inits object properties)
//create other methods like normal
class myClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        let info = '';
        info += this.name + ' is ' + this.age + ' years old.';
        return info;
    }
    future(x) {
        return 'In ten years, ' + this.name + ' will be ' + x + '.';
    }
}
//you can use the class to create objects!
let obj1 = new myClass("Annie", 2);
let obj2 = new myClass('Timothy', 97);
console.log(obj1.displayInfo()); //Annie is 2 years old
console.log(obj2.displayInfo()); //Timothy is 97 years old
console.log(obj1.displayInfo()); //Annie is 2 years old

console.log(obj1.future(12)); //In ten years, Annie will be 12.
console.log(obj2.future('dead')); //In ten years, Timothy will be dead.

//JSON is a format for storing and transporting data, language independent, uses double quotes " "
//formatting is identical to Javascript
//Use to read data from a server and display it

//JSON syntax (as a string)
let JSONtext = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

//turn the string into a Javascript object
let JSONobj = JSON.parse(JSONtext);
//display info from the object
console.log(JSONobj.employees[1].firstName + " " + JSONobj.employees[1].lastName); //Anna Smith

//debugging
//Use console.log (obv)
//In the debugger window of console (developer tools), you can set breakpoints in your code and check values etc at that point
//use the keyword: debugger; to stop code at that point and check values (right pane or hover on middle pane)

let q = 5;
// debugger;
q += 10; //15
// debugger;
q += 10; //25
// debugger;

//if debugger is not active (console window), code will pass through debugger lines and process everything
// alert(q);

//best practices
//tabs are read differently in different editors, so you should use space (now u tell me lmfao)
//put semicolons on the end of arrays and objects, but not on functions or loops or conditionals
//don't put a comma after the last item in arrays/objects/etc
//line length should be 80 characters or less for readability. Break after operators and commas
//use camelCase or under_scores, but pick one (be consistent), both in JS and HTML
//use all lowercase for file names! some servers are case insensitive, some aren't, capitalization will break your site
//code in development should focus on readability, clarity, whitespace, understanding
//large code files used for production can be minified (remove comments/whitespace/shorten var names) to make them process faster

//avoid global variables, use local variables. If you need them outside their block, return them.
//nested functions are allowed, and each can access the scope above them

//declare variables on top and initialize to avoid undefined values, reassign later if needed, show intended use and type
//do not use new to create anything as an object ie x = new String(), the only exception is class use

//don't use == - it will convert items to matching types before comparing. use === for comparison
//assign default values to arguments and parameters, like in function (a=1, b=1) - call will override but a missing arg won't break ur code
//always end switches with default, even if you think it's unneeded
//don't use eval() to run text as code - this is unsafe

//JSON and Internet Explorer will break if you have a comma after the last item in an array or object, etc

//Test for not undefined and then test for not null
if(typeof j !== "undefined" && j !== null) { //true
    console.log("J is all good!");
}

//To increase speed:
//Assignments and statements outside of loop where possible
//Assign HTML elements etc (getElementByID) to a local variable to avoid accessing it over and over - slow!
//Keep HTML Document Object Model (number of HTML elements) small to reduce amount to search (getElementByID)
//If you don't need to save values for later use, you don't need variables. The fewer variables you have, the faster it processes. Use literals and variables you already have and math.
//Don't use the keyword with
//Put your Javascript script at the bottom of your HTML document

//You can do form validation (but not processing) with Javascript!
//Check if input is empty or the wrong type, etc, and send an error message and return false if input is wrong
//Form action should be php file, onsubmit should be function
function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if(x === "") {
        alert("Enter your name.");
        return false;
    }
}
//And with HTML using the required keyword
/* <input type="text" required> */
//Make sure: user has filled in all req. fields, entered valid data (type, range)
//HTML validation: max, min, pattern, required, type
//CSS can select based on these: disabled (can't input), invalid (bad input), optional (not required), required, valid
//DOM has input validity methods...
// myInput.checkValidity() //returns true if input is valid, false if not valid
// myInput.setCustomValidity('your message'); // sets a custom message
function test1() {
    let input1 = document.getElementById("test");
    if(!input1.checkValidity()) {
        // input1.setCustomValidity("butt"); //this will override default messages, which are specific to error type
        alert(input1.validationMessage);
    } else {
        alert("Good input.");
    }
}

//Objects
//Primitive values (4, "hi", false) cannot be changed, though variables can
//Assigning a variable to an object does not create a copy. Editing either will change both.
let myobj = {name:'Timmy', age:24};
let timmy = myobj; //these are one object! no copies!
timmy.name="Anise"; //this changes the object name for both references
console.log(myobj.name); //Anise

//You can add new properties by assigning it a value
myobj.pet = 'Cat';
console.log(timmy.pet); //Cat

//you can delete a property and its value with delete (for object properties only, doesn't work on anything else)
delete timmy.age;
console.log(timmy.age); //undefined, does not exist

//EVENTS
//blur: when element loses focus (opposite of focus)
//change: input, select, or textarea content has changed (similar to input) - for example, run a function to format input appropriately after it's changed
//click
//copy: when user copies content of element
//cut
//dblclick
//drag
//dragend
//dragenter: dragged element enters the target zone
//dragleave: dragged element leaves target zone
//dragover: dragged element is over target zone
//dragstart
//drop: dragged element is dropped
//ended: when media reaches the end
//error: when error occurs loading external file
//focus
//focus in: element starts to be focused
//focusout
//input: element receives user input
//keydown
//keypress
//keyup
//mousedown
//mouseenter: hover
//mouseleave
//mousemove: moving while over an element 
//mouseover: same as mouseenter but also affects children
//mouseout: mouseleave + children
//mouseup: releases click above element
//pagehide: user navigates away from page
//pageshow: user navigates to page
//paste
//reset: form is reset
//scroll
//search (input type=search)
//submit: form is submitted
//touchend, touchmove, touchstart (touch screens)
//wheel: mouse wheel rolls over an element

//finding elements:
//TAG NAME
//document.getElementsByTagName("p"); //returns all p elements in the page
//you can also search within parts of the document only
//let x = document.getElementByID("main");
//x.getElementsByTagName("img"); //gets images within main
//CLASS NAME
//document.getElementsByClassName("cute");
//CSS SELECTORS
//use querySelectorAll() to search using CSS Selectors
//document.querySelectorAll("main p");
//OBJECT COLLECTIONS
//You can use anchors, embeds, forms, head, images, links, scripts, title...
//document.forms["myForm"]

//You can assign elements events using Javascript, rather than in the HTML
//document.getElementById("demo").onclick = myFunction;

//Animations
//You can create animations (elements moving) using Javascript and HTML.
//Create a relative container which holds an absolute element
//Create an event to start the animation (onload, onclick, onkeypress...)
//Create a variable to hold the position
//Create a variable to hold the interval (how often/seconds to move)
//Create a function to change the position:
//if position has reached final spot, clear the interval
//otherwise, increase the position variable and change the elements abs positioning using the variable

function anime() {
    let moved = document.getElementById("animate");
    let pos = 0;
    let inter = null;
    clearInterval(inter);
    inter = setInterval(frame, 5); //subfunction frame() below
    function frame() {
        if(pos===350){
            clearInterval(inter);
        } else {
            pos++;
            moved.style.top = pos + "px";
            moved.style.left = pos + "px";
        }
    }
}