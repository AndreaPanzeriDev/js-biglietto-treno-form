


function Calculator(){
    const KmPrice = 0.21;
    let NameSurname = document.getElementById("inputClient").value;
    console.log(NameSurname);
    let Km = parseInt(document.getElementById("inputKm").value);
    console.log(Km);
    let age = document.getElementById("inputGroupSelect02").value;
    console.log(age);
    let Price;

    switch (age){
        case '1':
            Price = (Km * KmPrice) * 0.8;
            console.log(Price);
        case '2':
            Price = (Km * KmPrice) * 0.6;
            console.log(Price);
        
        case '3':
            Price = Km * KmPrice;
            console.log(Price);
    }
    
}