/*

TRACCIA:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

const sumNumber = document.getElementById("somma");

// inizializzo una variabile per salvare il risultato della somma 
let sum = 0;


// 2. chiedo all'utente per 10 volte di inserire un numero
for(let i = 0; i < 10; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    
    // eseguo la somma 
    sum += userNumber;
}

// 3. popolo l'array con i numeri inseriti dall'utente 
console.log("la somma dei numeri è:" , sum );
