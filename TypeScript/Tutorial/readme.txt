// install latest TransphileypeScript version globally
sudo npm install -g typescript

// Transphile Typescript file
tsc main.ts

// Run first transphiled js file
node main.js

// transphile and Run file
tsc main.ts | node main.js
tsc main.ts && node main.js


/* Var  */
Let Vs Var :Always use let. Let is the best with relavant scope.
any type is not recommended(use unknown type instead). Always define the type.
enum is easier.(always try to decalre valuess explicitly) 

/*Fnc*/
use arrow functions
if more input arguements use interfaces

/*Clss*/
cohesion gather all related methods and attributes