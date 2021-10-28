/*

TRACCIA: L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

const num = document.getElementById("number");

// 1. chiedo all'utente il primo numero e lo savlo in una variabile -> prompt
let number1 = parseInt(prompt("inserici il primo numero"));
console.log("Il primo numero inserito dall'utente è: " , number1);

// 2. chiedo all'utente un secondo numero e lo salvo in una variabile -> prompt
let number2 = parseInt(prompt("inserici il secondo numero"));
console.log("Il secondo numero inserito dall'utente è: " , number2);

// 3. confronto i due numeri e stampo l'output ->if
if (number1 > number2) {
    console.log(`Il numero maggiore tra i due è:  ${number1}`)
    num.innerHTML = `Il numero maggiore tra i due è:  ${number1}`
} else if (number1 < number2) {
    console.log(`Il numero maggiore tra i due è:  ${number2}`)
    num.innerHTML = `Il numero maggiore tra i due è:  ${number2}`
} else {
    console.log("Non c'è un numero maggiore")
    num.innerHTML = "Non c'è un numero maggiore"
}



