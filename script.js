/*  temperatura = 29
 
 temperatura > 30 ? alert('Hace Calor') : alert('Hace frio')

 */



 class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = []
    }
    agregarCategoria(categoria){
        this.categoria.push(categoria)
    }
 }
id= 0
let productoCreado = []

let miBoton1 = document.getElementById('addProducto')

miBoton1.addEventListener('click',haciendoClick)

 
 /* funcion para agregar productos nuevos */
 function haciendoClick (){
    /* se crea un nuevo producto */
    id++
    let nombreProdcuto = prompt('Escriba el nombre del producto')
    let precioProducto = parseFloat(prompt('Precio de venta'))
    /* se añaden TODOS los productos creados en la lista */
    productoCreado.push(new Producto(id,nombreProdcuto,precioProducto)) 
    /* se guarda toda la lista en una session storage */
    sessionStorage.setItem('Producto'+ id ,JSON.stringify(productoCreado))
    
    /* leo los datos de la session almacenados*/
    let var2 = sessionStorage.getItem('Producto' + id)
    
   
    document.getElementById('productosNuevos').innerHTML = 'Producto nuevos a añadir: ' + JSON.parse(var2)['nombre'] + 'precio ' + JSON.parse(var2)['precio'] + ' $'

    
    if (sessionStorage.getItem('Producto1')) {
    
        let botonRefresh = document.getElementById('botonRefresh').innerHTML = 'Ver productos a añadir'
    }
    
 }

 