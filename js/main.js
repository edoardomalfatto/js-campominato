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
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */



//variabili utilizzate

var arrayBombs = [];//var contentente bombe generate dal computer
var numBombs = 16;//numero totale bombe generate dal computer
var arrayUserNumbers = [];
var max = 100;
var chosenLevel


//chiedo all'utente la difficoltà finchè non mette i dati correttamente

do {
    chosenLevel = parseInt(prompt("Inserisci una difficoltà da 0 (facile) a 2 (difficile)"));
} while (chosenLevel >3 || chosenLevel <0);


//BONUS: al variare della difficolà varia anche il max tetto per numeri casuali e numero tentativi

switch (chosenLevel) {
    case 2 :
    max = 50;
    break;
    case 1 :
    max = 80;
    break;
    default:
    max= 100;
};

console.log(max);



//genero un var con all'interno 16 bombe (numeri casuali tra uno e 100)

while (arrayBombs.length < numBombs) { //i cicli aumentano se l'array contain trova numeri bomba duplicati
    var generatedBomb = randomNumbers(1,100);
    if (arrayContain(generatedBomb,arrayBombs) == false) {
        arrayBombs.push(generatedBomb); 
    }
};


//faccio inserire all'utente un numero

var gameOver=false;


while (arrayUserNumbers.length < (max - numBombs) && (arrayContain(UserNumber,arrayBombs) == false) && gameOver==false) {
    var UserNumber = parseInt(prompt("Inserisci un numero"));
    gameOver=false;

    if (arrayContain(UserNumber,arrayBombs) == true) {
        alert("Mi dispiace,la prossima volta sarai più fortunato! Hai fatto " + (arrayUserNumbers.length) + " punti");
        gameOver = true;
    
    }else if (arrayContain(UserNumber,arrayUserNumbers) == false) {
        arrayUserNumbers.push(UserNumber);

    }else if (arrayContain(UserNumber,arrayUserNumbers) == true) {

        alert("Hai già inserito questo numero,inseriscine un altro");
    
    }else if (arrayUserNumbers.length == (max - numBombs)) {
        alert("Questa volta mi hai battuto. Hai fatto " + (arrayUserNumbers.length) + " punti");
    }
};

console.log(arrayBombs);
console.log(arrayUserNumbers);



//funzioni utilizzate

function randomNumbers(min ,max) {
    return Math.floor(Math.random() * ( max - min +1) + min);
}

function arrayContain(number,array) {
    var trovato=false;
    for (var i=0; i<array.length; i++ && trovato==false) {
        if(array[i] == number) {
         trovato = true;
        }
    }
    return trovato;
};

