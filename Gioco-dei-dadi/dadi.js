// # Gioco dei dadi
// Richiesta
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// # Pseudo Codice

// ## Raccolta dati
// Dichiaro il numero massimo
const max = 6;
// Dichiaro il numero minimo
const min = 1;

// ## Elaborazione
// Genero numero randomico per l'utente
const userNum = Math.floor(Math.random() * max + 1);
// Genero numero randomico per il computer
const pcNum = Math.floor(Math.random() * max + 1);
console.log('user number:', userNum);
console.log('computer number:', pcNum);

// Controllo chi ha il punteggio più alto
const userWon = userNum > pcNum;
// console.log(userWon);

// ## Output
// SE (numero utente > numero computer)
// Ha vinto l'utente
// ALTRIMENTI
// Ha vinto il computer
