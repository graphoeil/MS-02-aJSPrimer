// A Javascript Primer
//
import { sayHello, apiKey } from "./utils.js";

// <script src="index.js" defer type="module"></script>
// defer => script will be executed on DOM ready !
// type="module", allow us to use import in our JS files
console.log('-------------------');
console.log('Import & export');
sayHello();
console.log(apiKey);
console.log('-------------------');
console.log('');

// Variables and values
console.log('-------------------');
console.log('Variables and values');
let userMessage = 'Hello World!';
console.log(userMessage);
const cahouetMessage = 'Hello World, it\'s Cahouet !';
console.log(cahouetMessage);
console.log('-------------------');
console.log('');

// Operators
console.log('-------------------');
console.log('Operators');
console.log(`Add => ${ 10 + 5 }`);
console.log(`Divide => ${ 10 / 5 }`);
console.log(`String => ${ 'Hello' + ' World!' }`);
console.log(`False => ${ 10 === 5 }`);
console.log(`True => ${ 5 === 5 }`);
if (10 === 10){ console.log('10 = 10'); }
console.log('-------------------');
console.log('');

// Functions & parameters
console.log('-------------------');
console.log('Functions & parameters');
function greet(userName, message='Hello!'){
	console.log(`Hello ${ userName }!`);
	console.log(message);
	return 5;
};
greet('Cahouet','How are you ?');
greet('Jambon');
console.log(greet('Pataud','What\s up doc ?')); // 5
const arrowGreet = (userName, message='Arrow hello!') => {
	console.log(`Hello ${ userName }!`);
	console.log(message);
	return 5;
};
arrowGreet('Mushi','I\'m hungry !!!');
console.log('-------------------');
console.log('');

// Objects & classes
console.log('-------------------');
console.log('Objects & classes');
const user = {
	name:'Frédéric',
	birthday:'04/09/1971',
	greet(){
		console.log(`Hello I'm ${ this.name } !`);
	}
};
const calculateAge = (birthday) => {
	const birthyear = birthday.split('/')[2];
	const now = new Date().getFullYear();
	return now - Number(birthyear);
}
console.log(`${ user.name } is ${ calculateAge(user.birthday) } year's old.`);
user.greet();
class Nounours {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hi I'm ${ this.name } and I'm ${ this.age } year's old !`);
	}
};
const cahouet = new Nounours('Cahouet', 12);
cahouet.greet();
console.log('-------------------');
console.log('');

// Arrays
console.log('-------------------');
console.log('Arrays');
const movies = ['Conan','Blade Runner','Alien','Terminator'];
movies.push('Star Trek');
movies.forEach((movie) => {
	console.log(movie);
});
const duplicateMovies = movies.map((movie, index) => {
	return `${ index } : ${ movie }`;
});
console.log(duplicateMovies); // ['0 : Conan', '1 : Blade Runner', '2 : Alien', '3 : Terminator', '4 : Star Trek']
const alienId = movies.findIndex((movie) => {
	return movie === 'Alien';
});
console.log(`Alien as index ${ alienId } in movies array.`);
console.log('-------------------');
console.log('');

// Destructuring
console.log('-------------------');
console.log('Destructuring');
const [firstName, lastName] = ['Frédéric','Hoyez'];
console.log(firstName, lastName);
const { title, rank, origin:{ country } } = { title:'Terminator', rank:2, origin:{ country:'USA' } };
console.log(title, rank, country);
console.log('-------------------');
console.log('');

// Spread operator
console.log('-------------------');
console.log('Spread operator');
const otherMovies = ['Soleil vert','La Planète des Singes','Wargames'];
const allMovies = [ ...movies, ...otherMovies ];
console.log(allMovies); // ['Conan', 'Blade Runner', 'Alien', 'Terminator', 'Star Trek', 'Soleil vert', 'La Planète des Singes', 'Wargames']
const spreadObject = {
	id:1,
	title:'Spread',
	rank:34,
	isAdmin:true,
	petName:'Cahouet'
};
const superSpread = { isSpread:true, ...spreadObject };
console.log(superSpread); // {isSpread: true, id: 1, title: 'Spread', rank: 34, isAdmin: true, …}
console.log('-------------------');
console.log('');

// Control structures
console.log('-------------------');
console.log('Control structures');
// let password = prompt('Your password ?');
let password = 'Hello';
if (password === 'Hello'){
	console.log('Hello works');
} else if (password === 'hello'){
	console.log('hello works');
} else {
	console.log('Access not granted');
}
// For or forEach ;-)
for (const movie of movies){
	console.log(movie);
}
console.log('-------------------');
console.log('');

// Manipulating the DOM
console.log('-------------------');
console.log('Manipulating the DOM');
console.log('Never manipulate the DOM with React !');
console.log('Unless the manipulated DOM is identical to the virtual DOM in the case of animation (see Isotope projects) ;-)');
console.log('-------------------');
console.log('');

// Function as values
console.log('-------------------');
console.log('Function as values');
let timer = setTimeout(() => {
	console.log('Timed out !');
}, 1000);
const greeter = (greetFn) => {
	greetFn();
};
greeter(() => {
	console.log(`It's great !!!`);
});
console.log('-------------------');
console.log('');

// Functions in functions
console.log('-------------------');
console.log('Functions in functions');
const init = () => {
	const greetInit = () => {
		console.log('Hi from init !');
	};
	greetInit();
};
init(); // Execute greetInit();
console.log('-------------------');
console.log('');

// Reference vs Primitive values
console.log('-------------------');
console.log('Reference vs Primitive values');
let myMessage = 'Hello!'; // That's a primitive value
myMessage = 'Hello there !'; // Produce new value
// Objects & arrays are reference values
// For objects (and arrays are objects), 
// the memory address is stored in the variable.
// The underlying value can be edited without changing that adress.
// The value dans therefore be edited without reassigning the variable.
// To assign new adress we can use spread operator to make a copy ;-)
const hobbies = ['Sports','Cooking'];
hobbies.push('Reading'); // Mutate hobbies array, address in memory won't change !
console.log('-------------------');
console.log('');