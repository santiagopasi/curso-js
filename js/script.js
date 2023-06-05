
let subtitulo = document.getElementById('subtitulo')
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
cambio ( nombre,tiempo)