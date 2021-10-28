/*

TRACCIA: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/

const checkMessage = document.getElementById("messaggio");

// 1. creo un array con i nomi degli invitati 
const guestList = ["Mario" , "Luca" , "Elisabetta" , "Francesca" , "Filippo"];
console.log(guestList);


// 2. chiedo all'utente il suo nome -> prompt 
let userName = prompt("Qual è il tuo nome ?");
console.log("Il nome dell'utente è: " , userName);

// Variabile booleana 
let found = false;

// 3. controllo se il nome dell'utente è nella lista -> for 
for (let i = 0; i < guestList.length; i++) {

    if (userName === guestList[i]) {
        found = true;
    }

};

// 4. stampo il messaggio sull'esito del controllo 
if (found===true) {
    console.log("Il tuo nome è nella lista. Puoi partecipare alla festa");
    checkMessage.innerHTML = ("Il tuo nome è nella lista. Puoi partecipare alla festa");
} else {
    console.log("Il tuo nome non è nella lista. Non puoi partecipare alla festa");
    checkMessage.innerHTML = ("Il tuo nome non è nella lista. Non puoi partecipare alla festa");
}