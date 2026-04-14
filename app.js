const productos = [
    {id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12},
    {id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 10},
    {id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 70, ventas: 16},
    {id: 4, nombre: "USB", categoria: "Accesorios", precio: 25000, stock: 17, ventas: 6},
    {id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 0, ventas: 2}
];

//MOSTRA EN PANTALLA
function mostrar(data){
    document.getElementById("resultado").innerHTML
    =
     "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
}

//VER PRODUCTOS
function verinventario(){
    mostrar(productos);
}

//STOCK BAJO
function stockBajo(){
    let resultado= productos.filter(p => p.stock< 5&& p.stock > 0);
    mostrar(resultado);
}
//AGOTADOS
function agotados(){
    let resultado= productos.filter(p=>p.stock===0);
    mostrar(resultado);
}

//Buscar

function buscarproducto(){
    let nombre = prompt("ingrese el nombre:");

    if (!nombre){
        mostrar("no escribiste nada");
        return
    }

    let resultado = productos.find(p => p.nombre.toLowerCase().includes(nombres.toLowerCase())
);
    mostrar("resultado || no encontrado" );
}
//total inventario
function totalinventario() {
    let total = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0)
    mostrar("total inventario: $" + total);
}

//total vantas
function totalventas() {
    let total = productos.reduce((acc, p) => acc + p.ventas, 0);
}
//productos vendidios
function productostop() {
    let top = productos.reduce((a,b) => a.ventas > b.ventas ? a : b);
    mostrar(top);
    
}