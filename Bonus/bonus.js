// # Gioco dei dadi Bonus
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ## Modifiche da apportare
// Far inserire il numero all'utente al posto di generarlo random anche per lui.,
// Far durare il gioco finchè l'utente non scrive "STOP" al posto di un numero.

// ## Raccolta dati
// Dichiaro il numero massimo
const max = 6;
// Dichiaro il numero minimo
const min = 1;
// Dichiaro una variabile per quando interrompere il gioco
let endGame = false;

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
if (userWon === true) {
    // Ha vinto l'utente
    console.log('Winner:', 'User');
}
// ALTRIMENTI
else {
    // Ha vinto il computer
    console.log('Winner:', 'Computer');
}
