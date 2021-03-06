/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
*/

// Creazione Prompt per inserimento dati da parte del cliente
// Definizione della Variabile per il Prezzo al Km
// Calcolo del Prezzo in base ai Km
// Applicazione sconto secondo le regole del programma

var kmViaggio = prompt('Inserisci il numero dei Km che vuoi percorrere');
// console.log(kmviaggio);
var etaCliente = prompt('Inserisci la tua età per usufruire di eventuali sconti');
// console.log(etaCliente);

var prezzoKm = 0.21;
// console.log(prezzoKm);
var prezzoTot = kmViaggio * prezzoKm;
// console.log(prezzoTot);

var sconto20 = prezzoTot * 20 / 100;
// console.log(sconto20);
var sconto40 = prezzoTot * 40 / 100;
// console.log(sconto40);

if (etaCliente < 18) {
    document.getElementById('output').innerHTML = 'Il costo del viaggio è di € ' + (prezzoTot - sconto20);
} else if (etaCliente >= 65) {
    document.getElementById('output').innerHTML = 'Il costo del viaggio è di € ' + (prezzoTot - sconto40);
} else {
    document.getElementById('output').innerHTML = 'Il costo del viaggio è di € ' + prezzoTot;
}
