/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato

1 generare primo numero random
2 generare secondo numero random
3 dichiare vincitore con opzione di pareggio
4 stampa risultato su html
*/

var winner = document.getElementById("winner")

var userNumber = Math.floor(Math.random() * 5) + 2;
console.log("Il tuo numero random è: " + userNumber);

var computerNumber = Math.floor(Math.random() * 5) + 2;
console.log("Il numero random del computer è: " + computerNumber);

if (userNumber > computerNumber) {
   
    winner.innerHTML = "Il tuo numero è: " + userNumber  + 
    "<br> il numero del computer è: " + computerNumber + "<br><br> <strong>  Complimenti hai vinto! :)</strong>";
}   else if  (userNumber < computerNumber){

    winner.innerHTML = "Il tuo numero è: " + userNumber  + 
    "<br> il numero del computer è: " + computerNumber + "<br><br> <strong>  Mi dispiace hai perso :(</strong>";
}   else winner.innerHTML = "Il tuo numero è: " + userNumber  + 
    "<br> il numero del computer è: " + computerNumber + "<br><br> <strong>Avete pareggiato :/</strong>";

