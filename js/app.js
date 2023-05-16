control1 = true

while (control1) {
    let inicio = prompt("Oprima 1 para utilizar el concatenador")

    if (inicio == 1) {
        
        function concatenador(frase1,frase2,times) {
            
            let solucion2 = (frase1 + " " + frase2 + " ").repeat(times) 
            alert(solucion2)
        
        }
        let frase1 = prompt("Ingrese la primera frase a concatenar")
        let frase2 = prompt("Ingrese la segunda frase a concatenar")
        let times = parseFloat(prompt("Ingrese la cantidad de veces que quiere que se repita la concatenación."))
        concatenador(frase1,frase2,times)

        
    }else{
        let inicio2 = prompt("Escriba ESC si quiere salir del programa o cualquier otra tecla para volver a empezar.")
        if (inicio2 == "ESC") {
            control1 = false
            
        }

    }
   
}
