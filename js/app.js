control1 = true

while (control1) {
    let inicio = prompt("Oprima 1 para utilizar el concatenador /n Oprima 2 para utilizar el multiplicador de palabras /n Oprima 3 para calcular el área de una circunferencia. ")

    if (inicio == 1) {
        let frase1 = prompt("Ingrese la primera frase a concatenar")
        let frase2 = prompt("Ingrese la segunda frase a concatenar")
        let times = parseFloat(prompt("Ingrese la cantidad de veces que quiere que se repita la concatenación."))
        function concatenador(frase1,frase2,times) {
            
            
            for (i = 0; i < times; i++) {
                solucion2 = ""
                let solucion1= frase1 + "  " + frase2
                let solucion2 = soluciion2 + solucion1
                
        }
        console.log(solucion2);
            
        }
        concatenador(frase1,frase2,times)
        control1=false
    }
   
}
