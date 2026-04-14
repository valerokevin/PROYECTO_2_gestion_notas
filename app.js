const inventario = [
    { id: 101, nombre: "Laptop Gamer", categoria: "Tecnología", precio: 3500000, stock: 6, vendidos: 3 },
    { id: 102, nombre: "Audífonos Bluetooth", categoria: "Audio", precio: 150000, stock: 2, vendidos: 10 },
    { id: 103, nombre: "Smartwatch", categoria: "Tecnología", precio: 500000, stock: 0, vendidos: 8 },
    { id: 104, nombre: "Cargador USB-C", categoria: "Accesorios", precio: 40000, stock: 15, vendidos: 20 },
    { id: 105, nombre: "Tablet", categoria: "Tecnología", precio: 1200000, stock: 4, vendidos: 5 }
];


// Mostrar productos
function verInventario() {
    console.table(inventario);
}

//  Stock bajo
function productosCriticos() {
    return inventario.filter(p => p.stock > 0 && p.stock < 5);
}

//  Sin stock
function sinExistencias() {
    return inventario.filter(p => p.stock === 0);
}

//  Buscar
function buscar(nombre) {
    return inventario.find(p => 
    p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
}

//  Valor total inventario
function calcularInventario() {
  return inventario.reduce((total, p) => total + (p.precio * p.stock), 0);
}

//  Total ventas en dinero
function calcularVentas() {
  return inventario.reduce((total, p) => total + (p.precio * p.vendidos), 0);
}

//  Más vendido
function topProducto() {
    return inventario.reduce((max, p) => 
    p.vendidos > max.vendidos ? p : max
    );
}

//  Ordenar por precio
function ordenarPrecios() {
    return [...inventario].sort((a, b) => b.precio - a.precio);
}

//  Validaciones
function existeAgotado() {
    return inventario.some(p => p.stock === 0);
}

function todosDisponibles() {
    return inventario.every(p => p.stock > 0);
}

//  Reporte general
function reporte() {
    console.log(" Inventario total:", calcularInventario());
    console.log(" Ventas totales:", calcularVentas());
    console.log("Producto top:", topProducto().nombre);
    console.log(" Stock bajo:", productosCriticos());
    console.log(" Agotados:", sinExistencias());
}

//  MENÚ INTERACTIVO
function iniciarSistema() {
    let opcion;

    do {
    opcion = prompt(`
    === SISTEMA DE INVENTARIO ===
    1. Ver inventario
    2. Stock bajo
    3. Productos agotados
    4. Buscar producto
    5. Total inventario
    6. Total ventas
    7. Producto más vendido
    8. Reporte general
    0. Salir
    `);

    switch(opcion) {
    case "1":
        verInventario();
        break;

    case "2":
        console.table(productosCriticos());
        break;

    case "3":
        console.table(sinExistencias());
        break;

    case "4":
        let nombre = prompt("Ingrese el nombre:");
        console.log(buscar(nombre));
        break;

    case "5":
        console.log(calcularInventario());
        break;

    case "6":
        console.log(calcularVentas());
        break;

    case "7":
        console.log(topProducto());
        break;

    case "8":
        reporte();
        break;

    case "0":
        console.log("Sistema cerrado");
        break;

    default:
        console.log("Opción inválida");
    }

} while(opcion !== "0");
}

// Ejecutar
iniciarSistema();