

//aggiorno la pagina
function refreshPage(){
    window.location.reload()
}






//calcolo prezzo biglietto
function Calculator(){
    const KmPrice = 0.21;
    let NameSurname = document.getElementById("inputClient").value;
    console.log(NameSurname);
    let Km = parseInt(document.getElementById("inputKm").value);
    console.log(Km);
    let age = parseInt(document.getElementById("inputGroupSelect02").value);
    console.log(age);
    let Price;
    //output nome e cognome biglietto
    document.getElementById('outputName').innerHTML = NameSurname;
    //output tipologia biglietto
    document.getElementById('outputOffer').innerHTML = 'Biglietto Standard';
    //output numero carrozza suppongo 12 carrozze
    let wagon = Math.random() * 12;
    document.getElementById('outputWagon').innerHTML = wagon.toFixed(0);
    //output codice cp
    let cp_code = Math.random() * 9999;
    document.getElementById('outputCp').innerHTML = cp_code.toFixed(0);

    switch (age){
        case 1:
            Price = (Km * KmPrice) * 0.8;
            console.log(Price);
            document.getElementById('outputPrice').innerHTML = Price.toFixed(2) + '$';
            break;
        case 2:
            Price = (Km * KmPrice) * 0.6;
            console.log(Price);
            document.getElementById('outputPrice').innerHTML = Price.toFixed(2) + '$';
            break;
        
        case 3:
            Price = Km * KmPrice;
            console.log(Price);
            document.getElementById('outputPrice').innerHTML = Price.toFixed(2) + '$';
            break;
    }
    
}