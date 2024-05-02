


//richiamo la griglia in JS
let griglia = document.getElementById("griglia");

//richiamo il button in JS 
let bottone=document.getElementById("start-button");
//  gestisco il ciclo per la creazione della griglia


// creo l'evento allo scatenare del click

bottone.addEventListener("click",function(){
    for (let i = 1; i <= 100; i++) {
        let quadrato=f_quadrato(i);
    
        griglia.append(quadrato);
    
        }

})
