/* qui metto le funzioni da mettere 
nello script principale*/

//prima funzione:creazione quadrato 

function f_quadrato(i) {
    let quadrato = document.createElement("div");

    quadrato.classList.add("quadrato")


    quadrato.addEventListener("click", function () {

        quadrato.classList.toggle("azzurro")

        console.log(i);
        quadrato.innerText = i;

        

    });

    return quadrato;
}

// nel ciclo pongo la condizione i<= 16
for (let i = 0; i <=16 ; i++) {
    //creo un numero casuale 
    let bomba=Math.ceil(Math.random() * 100);

    //mi chiedo se il numero è gia nell'array:
    // se c'è già non faccio nulla 
    if(lista_bomba.includes(bomba)){
        
    } /*sennò aggiungo il numero all'array*/
      else{     
    lista_bomba.push(bomba)
    }  
}
