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

