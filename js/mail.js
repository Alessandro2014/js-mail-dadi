/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1 inserisci la tua email
2 creare array con altri indirizzi email
3 verifica indirizzo che sia già dentro l'array
4 stampa messaggio esito
*/

var access = document.getElementById("winner");
var userMail = (prompt("Benvenuto, inserisci il tuo indirizzo email", "@gmail.com"));

var registeredEmail = ["marco@libero.it", "chiara@libero.it", "davide@gmail.com",
 "luigi@libero.it", "alessandro@gmail.com"];
console.table(registeredEmail);

var flag = false;

for (var i = 0; i < registeredEmail.length; i++) {
    console.log(registeredEmail[i]);
    if (userMail == registeredEmail[i]) {
        flag = true;
    } 
  }

if (flag){
    console.log ("Bentornato, puoi accedere!");
    winner.innerHTML = "Bentornato " + userMail ;
} else {
    console.log("Ci dispiace, non sei ancora registrato!");
    winner.innerHTML = "Ci dispiace, non sei ancora registrato!";
}
