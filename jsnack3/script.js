/*

TRACCIA:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

const sumNumber = document.getElementById("somma");

// 1. creo un array vuoto che sarà popolato dai numeri inseriti dall'utente 
const arrayNum = [];
console.log("l'array iniziale è:" , arrayNum);


// 2. chiedo all'utente per 10 volte di inserire un numero
for(let i = 0; i < 10; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    console.log("il numero inserito dall'utente è:" , userNumber);
    arrayNum.push(userNumber);
}

// 3. popolo l'array con i numeri inseriti dall'utente 
console.log("l'array aggiornato è:" , arrayNum );


