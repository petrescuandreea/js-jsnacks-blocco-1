/*

TRACCIA: Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

*/


// 1. creo un array vuoto che contenga i numeri
const arrayNumber = [];

// 2. genero un numero random 
// 3. controllo se è già presente 
// 3.1 scorro la lista di numeri estratti
// 3.2 se non è stato estratto, lo stampo
while (arrayNumber.length < 50) {
    
    // genero un numero a caso tra 1 e 100
    let number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    
    // variabile ausiliaria 
    let found = false;

    // controllo se il numero è già nell'array 
    for (i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] === number) {
            // se è già nell'array cambio il valore alla variabile 
            found = true;
        }
    }

    // utilizzo la variabile ausiliaria per sapere se il numero generato è nuovo o è già nell'array
    if(!found) /*if (found === false)*/ {
        // se non è stato trovato lo inseriamo nell'array
        arrayNumber.push(number);
    }

}

console.log("la lista di numeri casuali senza duplicati è: " , arrayNumber);
