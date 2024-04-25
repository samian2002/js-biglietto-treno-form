// Prendo le informazioni e calcolo
function calcolaPrezzo() {
    const nomeCognome = document.getElementById("nome-cognome").value;
    const kmDaPercorrere = document.getElementById("km-da-percorrere").value;
    const eta = document.getElementById("eta");
    // Metto numero di carrozze disponibili
    const carrozze = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    //Genero un numero casuale a 5 cifre per il codice CP
    const codiceCP = Math.floor(Math.random() + 90000) + 10000;
    //Costo
    const costoBase = 0.21;
    let costoBiglietto = costoBase * kmDaPercorrere;
    //Sconto 20%
    if (eta < 18) {
        costoBiglietto *= 0.8;
    }
    //Sconto 40%
    else (eta > 65) {
        costoBiglietto *= 0.6
    }
    

}