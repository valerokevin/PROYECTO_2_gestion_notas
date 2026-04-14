const productos = [
    { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
    { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
    { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
    { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
    { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

// MOSTRAR EN PANTALLA
function mostrar(data) {
document.getElementById("resultado").innerHTML =
    "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
}

// Ver productos
function verInventario() {
mostrar(productos);
}

// Stock bajo
function stockBajo() {
let resultado = productos.filter(p => p.stock < 5 && p.stock > 0);
mostrar(resultado);
}

// Agotados
function agotados() {
let resultado = productos.filter(p => p.stock === 0);
mostrar(resultado);
}

// Buscar
function buscarProducto() {
let nombre = prompt("Ingrese el nombre:");

if (!nombre) {
    mostrar("No escribiste nada");
    return;
}

let resultado = productos.find(p =>
    p.nombre.toLowerCase().includes(nombre.toLowerCase())
);

mostrar(resultado || "No encontrado");
}

// Total inventario
function totalInventario() {
  let total = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
mostrar("Total inventario: $" + total);
}

// Total ventas
function totalVentas() {
let total = productos.reduce((acc, p) => acc + p.ventas, 0);
mostrar("Total ventas: " + total);
}

// Producto más vendido
function productoTop() {
let top = productos.reduce((a, b) =>
    a.ventas > b.ventas ? a : b
);

mostrar(top);
}