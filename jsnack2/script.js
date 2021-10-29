/*

TRACCIA: L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const word = document.getElementById("parola");

// 1. chiedo all'utente la prima parola -> prompt 
let word1 = prompt ("inserisci la prima parola");
console.log(`la prima parola inserita è: ${word1}`);


// 2. chiedo all'utente la seconda parola -> prompt 
let word2 = prompt ("inserisci la seconda parola");
console.log(`la seconda parola inserita è: ${word2}`);


// 3. confronto le due parole e stampo l'output -> if
if (word1.length > word2.length) {
    // 3.1 stampo la parola più corta poi la più lunga
    word.innerHTML = `la parola più corta è: ${word2}. + " " + la parola più lunga è: ${word1}`;
    console.log(`la parola più corta è: ${word2}`);
    

} else if (word1.length < word2.length) {
    // stampo la parola più corta poi la più lunga
    word.innerHTML = `la parola più corta è: ${word1}. +  " " + la parola più lunga è: ${word2}`;
    console.log(`la parola più corta è: ${word1}`);


} else {
    console.log("le parole sono lunghe uguali");
    word.innerHTML = ("le parole sono lunghe uguali");
}
