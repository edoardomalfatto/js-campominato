/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta,
 sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati,
 la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” 
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha inserito un numero consentito.
 */
/* BONUS:all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
/* con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */

//variabili utilizzate
var generatedBomb = [];
var numBombe = 16;
var numeriUtente = [];
var max = 100;

//crea un numero casuale, se il numero casuale non si ripete pusha dentro geberatedBomb

while (generatedBomb.length < numBombe) {
    var bombeGenerate = randomNumbers(1, 100);
    if (arrayContain(bombeGenerate, generatedBomb) == false) {
        generatedBomb.push(bombeGenerate);
    }
};
console.log(generatedBomb);


//FORMA ALTERNATIVA CON CICLO FOR

/* for (generatedBomb.length=0; generatedBomb.length < numBombe; generatedBomb++ ) {
    var bombeGenerate =randomNumbers(1 ,100);
    if(arrayContain(bombeGenerate,generatedBomb)==false) {  
    generatedBomb.push(bombeGenerate);
    } 
}; */
var gameOver = false;

while (numeriUtente.length < max - numBombe && gameOver == false) {
    var numeroUtente = parseInt(prompt("Inserisci un numero da uno a " + (max)));

    if ((arrayContain(numeroUtente, generatedBomb)) == true) {
        alert("Mi dispiace hai perso");
        gameOver = true;

    } else if ((arrayContain(numeroUtente, numeriUtente)) == true) {
        alert("Numero già inserito,inseriscine uno nuovo");

    } else if ((arrayContain(numeroUtente, generatedBomb)) == false) {
        numeriUtente.push(numeroUtente);

    } else if ((numeroUtente.length) == (max - numBombe)) {
        alert("Questa volta hai vinto tu");
    }
};

//FORMA ALTERNATIVA CON CICLO FOR

/* for (numeriUtente.length=0; numeriUtente.length< max-numBombe && gameOver==false; numeriUtente.length++){
    var numeroUtente = parseInt(prompt("Inserisci un numero da uno a " + (max)));
    
    if ((arrayContain(numeroUtente, generatedBomb))==true) {
        alert("Mi dispiace hai perso");
        gameOver=true;
    
    } else if ((arrayContain(numeroUtente, numeriUtente))==true) {
        alert("Numero già inserito,inseriscine uno nuovo");
   
    } else if ((arrayContain(numeroUtente, generatedBomb))==false) {
        numeriUtente.push(numeroUtente);
    
    } else if ((numeroUtente.length) == (max-numBombe)) {
        alert("Questa volta hai vinto tu");
    }
}; */

console.log(numeriUtente);












//funzioni utilizzate

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayContain(number, array) {
    var trovato = false;
    for (var i = 0; i < array.length; i++ && trovato == false) {
        if (array[i] == number) {
            trovato = true;
        }
    }
    return trovato;
};