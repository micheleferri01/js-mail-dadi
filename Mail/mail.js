// # Mail
// Richiesta
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array(come includes, per esempio).
// Si può fare ? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

// # Pseudo codice

// # Raccolta dati
// Dichiaro un array con tutte le mail di chi può accedere alla festa
const mails = ['invitato1@mail.it', 'invitato2@mail.it', 'invitato3@mail.it', 'invitato4@mail.it', 'invitato5@mail.it', 'invitato6@mail.it', 'invitato7@mail.it', 'invitato8@mail.it', 'invitato9@mail.it', 'invitato10@mail.it'];

// chiedo all'utente la sua mail
const userMail = prompt("Inserire email","invitato@mail.it");

// Dichiaro variabile per salvare se l'utente è invitato
let isUserInvited = false;

// ## Elaborazione
// Scorro la lista delle mail
for (let i = 0; i < mails.length; i++){
    const currentMail = mails[i];

    // controllo che la mail dell'utente sia nella lista
    isUserInvited = currentMail === userMail || isUserInvited;
    console.log (currentMail);
    console.log (isUserInvited);
}

// ## Output
// SE (la mail dell'utente è nella lista)
// scrivo che l'utente è invitato alla festa
// ALTRIMENTI
// scrivo che l'utente non è invitato alla festa
