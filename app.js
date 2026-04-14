const productos = [
    {id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12},
    {id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 10},
    {id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 70, ventas: 16},
    {id: 4, nombre: "USB", categoria: "Accesorios", precio: 25000, stock: 17, ventas: 6},
    {id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 0, ventas: 2}
];

//mostrar en pantalla 
function mostrar(data) {
    document.getElementById("resultado").innerHTML = "<pre>" + JSON.stringify(data, null ) +"</pre>:" ;
}

//ver productos 

function verinventario() {
    mostrar(productos);
    
}

//stock bajo

function stockbajo() {
    let resultado = productos.filter(p => p.stock < 5 && p.stock > 0); 
    mostrar(resuktasdo);
    
}

//agotados

function agotados() {
    let resultado = productos.filter(p => p.stock === 0);
    mostrar(resultado);
    
}

//buscar
function buscarproducto() {
    let nombre = promt("ingrese el nombre")

    if (!nombre) {
        mostrar("no escribiste nada");
        return;
    }

    let resultado = producto.find(p => p.nombre.toLoersCase().includes(nombre.toLoersCase()) 
);
mostrar(resultado || "no encontrado")
};

//total inventarios

function totalinventario() {
    let total = productos.reduce((acc, p) => acc + (p.precio * p.stock),0); 
    mostrar("total inventario:" + total) 
    
};


// ventas totales
function ventastotales() {
    let total = productos.reduce((acc, p) => acc + p.ventas, 0);
    mostrar("total ventas:" + total);
    
}

//producto mas vendido

function productotop() {
    let top = productos.reduce((a,b) => a.ventas > b.ventas ? a : b );

mostrar(top);
}