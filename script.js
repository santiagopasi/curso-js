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

let botonCrearProducto = document.getElementById('addProducto')


botonCrearProducto.addEventListener('click',crearProducto)

 
 /* funcion para agregar productos nuevos */
 function crearProducto (){
    /* se crea un nuevo producto */
    id++
    let nombreProdcuto = prompt('Escriba el nombre del producto')


    let precioProducto = parseFloat(prompt('Precio de venta'))
    while (isNaN(precioProducto)) {
        precioProducto = parseFloat(prompt('Ingrese un valor numérico!!'))
    }
    
    /* se añaden TODOS los productos creados en la lista */
    productoCreado.push(new Producto(id,nombreProdcuto,precioProducto)) 
    /* se guarda toda la lista en una session storage */
    let productosCreados = ""
    for (let index = 0; index < productoCreado.length; index++) {
        productosCreados += '<p id=\"producto' + index + '\">' + productoCreado[index]['nombre'] + ' $' + productoCreado[index]['precio'] + '</p>'
        
        
    }
    
    sessionStorage.setItem('ProductosCreados',JSON.stringify(productosCreados))
    
    /* leo los datos de la session almacenados*/
    let var2 = sessionStorage.getItem('ProductosCreados')
    
    
    document.getElementById('productosNuevos').innerHTML = ('Productos nuevos a añadir: '  + var2).replace(/"/g,"") 

    
    
for (let index = 0; index < productoCreado.length; index++) {
        
        prod = document.getElementById("\\" + 'producto' +index+'\\')
        texto = '<button id="botonproducto'+index+'"class="btn btn-secondary" >Agregar categoría</button>'
        if (index%2 == 0) {
            
            prod.className = ('bg-danger')
            prod.innerHTML += texto
        }else{
            prod.innerHTML += texto
            prod.className = ('bg-success')
        }
        
        
        }

        /* NO ME TOMA EL EVENTO EN EL BOTON DE AGREGAR CATEGORIA E IMPRIME POR CONSOLA EL VALOR HIHIHIHI */
for (let index = 0; index < productoCreado.length; index++) {

    let agregarCategoria = document.getElementById('botonproducto'+index)
    agregarCategoria.addEventListener('click',console.log('hihiihi'))
    
    
    }
    

    

 sessionStorage.getItem('ProductosCreados') ? document.getElementById('botonRefresh').innerHTML = 'Ver productos a añadir' : console.log('algo') }


 