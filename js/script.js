
/* let subtitulo = document.getElementById('subtitulo')
subtitulo.innerHTML = 'AQUI se actualizará tu nombre después del tiempo indicado'

let nombre = prompt('Indique su nombre')
let tiempo = parseFloat(prompt('Indique en cuántos segundos quiere que se actualice el subtítulo con su nombre '))

let data = new  Date()


function cambio(nombre,tiempo) {
    subtitulo.innerHTML = nombre + ' solicitó actualizar el subtítulo y se ejecutó en ' + tiempo + ' segundos.'
    for (let index = 0; index < 1000000; index++) {
        console.log('haciendo tiempo');
        let newData = new Date()
        let dif = (newData-data)/1000
        if (dif==tiempo) {
            break
            
        }
        
    }
}
cambio ( nombre,tiempo) */



function myFunction() {
    let text = "Quieres seguir agregando productos?\nApretá OK o Cancel.";
    if (confirm(text) == true) {
        text = 'you pressed ok'
        
        let control = true
        return control
        
    } else {
        text = 'Cancel'
        
        let control = false
        return false
        
    }

  }

let control = true
let index = 0
let objetos = {}
while (control==true) {
        
        let nombre = prompt('Indique el nombre del producto a añadir a la lista')
        let precio = prompt('Indique el precio de ese producto')
        objetos += {id:index,nombre_objecto:nombre,precio_objecto:precio }
        index += 1
        
        let texto = myFunction()
        
        if (texto == false) {
            control = false
        }
     
    
}
console.log(JSON.stringify(objetos));
/* for (const objeto in objetos) {
    console.log(objeto.id);
} */

/* for (const objeto of objetos) {
    console.log(objeto);
} */