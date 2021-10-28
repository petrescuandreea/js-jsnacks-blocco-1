/*

TRACCIA:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

const sumNumber = document.getElementById("somma");

// 1. chiedo all'utente per 10 volte di inserire un numero -> prompt
let number1 = parseInt(prompt("inserici il primo numero"));
console.log(`Il primo numero inserito dall'utente è: ${number1}`);

let number2 = parseInt(prompt("inserici il secondo numero"));
console.log(`Il secondo numero inserito dall'utente è: ${number2}`);

let number3 = parseInt(prompt("inserici il terzo numero"));
console.log(`Il terzo numero inserito dall'utente è: ${number3}`);

let number4 = parseInt(prompt("inserici il quarto numero"));
console.log(`Il quarto numero inserito dall'utente è: ${number4}`);

let number5 = parseInt(prompt("inserici il quinto numero"));
console.log(`Il quinto numero inserito dall'utente è: ${number5}`);

let number6 = parseInt(prompt("inserici il sesto numero"));
console.log(`Il sesto numero inserito dall'utente è: ${number6}`);

let number7 = parseInt(prompt("inserici il settimo numero"));
console.log(`Il settimo numero inserito dall'utente è: ${number7}`);

let number8 = parseInt(prompt("inserici il ottavo numero"));
console.log(`Il ottavo numero inserito dall'utente è: ${number8}`);

let number9 = parseInt(prompt("inserici il nono numero"));
console.log(`Il nono numero inserito dall'utente è: ${number9}`);

let number10 = parseInt(prompt("inserici il decimo numero"));
console.log(`Il decimo numero inserito dall'utente è: ${number10}`);


// 2. faccio la somma dei 10 numeri e stampo l'output 
let sum = number1+number2+number3+number4+number5+number6+number7+number8+number9+number10;
console.log(`La somma dei numeri inseriti dall'utente è: ${sum}`);
sumNumber.innerHTML = ` La somma dei numeri inseriti dall'utente è: ${sum}`; 
