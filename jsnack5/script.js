/*

TRACCIA: Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

// 1. Creo l'array vuoto 
const arrayNumbers = [];
console.log("L'array iniziale è: " , arrayNumbers);

// 2. chiedo all'utente per 6 volte di inserire un numero 

for(let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    console.log("Il numero inserito dall'utente è: " , userNumber);

    // 2.1 se il numero inserito dall'utente è dispari lo inserisco nell'array 
    if(userNumber % 2 !==0){
        arrayNumbers.push(userNumber);
    }

}

console.log("l'array aggiornato è :" , arrayNumbers);
