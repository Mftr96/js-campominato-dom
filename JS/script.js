
//richiamo la griglia in JS
let griglia = document.getElementById("griglia");

//richiamo il button in JS 
let bottone = document.getElementById("start-button");

//creo l'array in cui andare a mettere dopo la classe bomba 
let lista_bomba = [];

/* creo l'evento allo scatenare del click
 nel quale crea la griglia e crea il contenuto
 di lista_bomba */
bottone.addEventListener("click", function () {

    //  gestisco il ciclo per la creazione della griglia
    for (let i = 1; i <= 100; i++) {
        let quadrato = f_quadrato(i);

        griglia.append(quadrato);

    }
    //gestisco il ciclo per creare la lista di quadrati bomba

    // nel ciclo pongo la condizione i<= 16
    for (let i = 0; lista_bomba.length <= 15; i++) {
        //creo un numero casuale 
        let bomba = Math.ceil(Math.random() * 100);

        //mi chiedo se il numero è gia nell'array:
        // se c'è già non faccio nulla 
        if (lista_bomba.includes(bomba)) {

        } /*sennò aggiungo il numero all'array*/
        else {
            lista_bomba.push(bomba);
        }
    }

})
