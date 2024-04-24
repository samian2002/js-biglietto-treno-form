
document.getElementById("submit").addEventListener("click", function(){
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    const pricePerKm = 0.21;
    let tiketPrice = km * pricePerKm;

    if(age<18){
        tiketPrice = tiketPrice - (tiketPrice * 0.2);
    } else if(age>65){
        tiketPrice = tiketPrice - (tiketPrice * 0.4);
    }

    console.log("Il bogileitto costa: " + tiketPrice);
    document.getElementById("finalPrice").innerText = tiketPrice
})
