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
// imposto la condizione di avvio del ciclo
while (endGame === false){

    // Chiedo all'utente di inserire un numero o terminare il gioco
    let userInput = prompt(`Inserire un numero tra ${min} e ${max} oppure Scrivere STOP per terminare il gioco`);

    // Variabile per convertire l'input dell'utente in un numero
    let userNum = parseInt(userInput);
    
    // Controllo che l'utente non voglia interrompere il gioco
    if (userInput.toUpperCase() === false || isNaN(userNum)){
        console.log("Gioco terminato");
        alert ('Gioco terminato');
        endGame = true;
    }
    // Controllo che l'utente abbia inserito un valore numerico che sia nel range permesso
    else if (userNum < min || userNum > max){
        console.log('Imserire un numero tra 1 e 6');
        alert(`inserire un numero tra ${min} e ${max}`);
    }
    else{    
        // Genero numero randomico per il computer
        const pcNum = Math.floor(Math.random() * max + 1);
        console.log('user number:', userNum);
        console.log('computer number:', pcNum);
        
        // Controllo chi ha il punteggio più alto
        const userWon = userNum > pcNum;
        // console.log(userWon);
        
        // ## Output
        // SE (numero utente === numero computer)
        if (userNum === pcNum){
            // è pareggio
            console.log('Pareggio');
            alert(`Risultato\nNumero utente: ${userNum}\nNumero computer: ${pcNum}\nPareggio`);
        }
        // ALTRIMENTI SE (numero utente > numero computer)
        else if (userWon === true) {
            // Ha vinto l'utente
            console.log('Winner:', 'User');
            alert(`Risultato\nNumero utente: ${userNum}\nNumero computer: ${pcNum}\nHa vinto l'utente`);
        }
        // ALTRIMENTI
        else {
            // Ha vinto il computer
            console.log('Winner:', 'Computer');
            alert(`Risultato\nNumero utente: ${userNum}\nNumero computer: ${pcNum}\nHa vinto il computer`);
        }
    }
}
