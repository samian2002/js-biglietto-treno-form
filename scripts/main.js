// Prendo le informazioni e calcolo
function calcolaPrezzo() {
    const nomeCognome = document.getElementById("nome-cognome").value;
    const kmDaPercorrere = parseInt(document.getElementById("km-da-percorrere").value);
    const eta = parseInt(document.getElementById("eta").value);
    // Metto numero di carrozze disponibili
    const carrozze = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //Genero un numero casuale a 5 cifre per il codice CP
    const codiceCP = Math.floor(Math.random() * 90000) + 10000;
    //Costo
    const costoBase = 0.21;
    let costoBiglietto = costoBase * kmDaPercorrere;
    //Sconto 20%
    if (eta < 18) {
        costoBiglietto *= 0.8;
    }
    //Sconto 40%
    else if (eta > 65) {
        costoBiglietto *= 0.6;
    }
    //Seleziono a caso la carrozza
    const carrozza = carrozze[Math.floor(Math.random() * carrozze.length)];
    //Aggiornare le seconda sezione
    document.getElementById("nome-cognome-passeggero").innerText = nomeCognome;
    document.getElementById("carrozza").innerText = carrozza;
    document.getElementById("codice-cp").innerText = codiceCP;
    document.getElementById("costo-biglietto").innerText = costoBiglietto.toFixed(2);
    //viasualizza aggiornamento
    document.getElementById("dettagli-biglietto").style.display = "block";


    function annulla() {
        // Resetta i valori dei campi input
        document.getElementById("nome-cognome").value = "";
        document.getElementById("km-da-percorrere").value = "";
        document.getElementById("eta").value = "";
    }
4
}