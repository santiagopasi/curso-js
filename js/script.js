class Usuario {
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
        this.aporte = []
    }

    agregarAporte (aporte){
        this.aporte.push(aporte)
    }
}

let index = 0
let userList = []
opcion = 0
while (opcion != 3) {
    let nombreUser = prompt('Indique su nombre')
    let newUser = new Usuario(index,nombreUser)
    userList.push(newUser)
    index += 1
    opcion = parseInt(prompt(
        newUser.nombre + ' usted quiere:\n' +
        '1. Ingresar un nuevo aporte con este user.\n' +
        '2. Ingresar aportes con nuevo user.\n' +
        '3. Salir e imprimir listado de usuarios con sus aportes.'
    ));
    if (opcion==1) {
        monto = parseFloat(prompt('Agregar nuevo aporte con este usuario'));
            if (isNaN(monto)) {
                alert('Ingrese un valor numérico! Ahora volverá a empezar el menu.'); 
               
            } else {
                newUser.agregarAporte(monto);   
                opcionMonto= confirm('Desea agregar más aportes con este usuario?')
                if (opcionMonto == true) {
                    monto = parseFloat(prompt('Agregar nuevo aporte con el mismo usuario'));
                    if (isNaN(monto)) {
                        alert('Ingrese valor valido'); 
               
                    } else {
                        newUser.agregarAporte(monto); 
                    
                }
            } else {
                alert('Volverás al menu principal y te preguntará por un nuevo user!')
            }
            }
    if (opcion==2) {
        let nombreUser = prompt('Indique su nombre')
        let newUser = new Usuario(index,nombreUser)
        monto = parseFloat(prompt('Agregar nuevo aporte con este nuevo usuario'));
            if (isNaN(monto)) {
                alert('Ingrese valor valido'); // si no es valido el input vuelve al menu raiz
               
            } else {
                newUser.agregarAporte(monto);   
            };
    }
    if (opcion == 3) {
        break
        
    }
    }

    }      
    
let subtitulo = document.getElementById('subtitulo')



for (const user of userList) {
        subtitulo.innerHTML += 'User con id '+ user.id + ' nombre '+  user.nombre + ' realizó un aporte de ' + user.aporte + '\n'
        console.log('User con id '+ user.id + ' nombre '+  user.nombre + ' realizó un aporte de ' + user.aporte);
}



