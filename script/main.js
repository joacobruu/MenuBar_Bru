const items = [];
let salir = false;
let opcion = 0;
let cantidad;
const IVA = 0.21;

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  };
};

class Pedido {
  constructor() {
    this.total = 0;
  };

  agregarProductos(producto) {
    items.push(producto);
  };

  getItems() {
    return items;
  };

  getSubTotal() {
    let subTotoal = 0;
    items.forEach((item) => {
      subTotoal += item.precio;
    });
    return subTotoal;
  };

  getIVA() {
    let iva = this.getSubTotal() * IVA;
    return iva;
  };

  getTotal() {
    this.total += (this.getSubTotal() + this.getIVA());
    return this.total;
  }
};

do {
  const pedido = new Pedido();
  let opcion = parseInt(prompt("Que desea añadir a su pedido? \n1) Pinta de cerveza - $250" + 
                         "\n2) Papas Fritas con cheddar - $500" +
                         "\n3) Hamburguesa - $350" +
                         "\n4) Pizza - $700" +
                         "\n5) Gaseosa - $100" +
                         "\n6) Agua mineral - $70" +
                         "\n\n7) Pedido Completo" +
                         "\n8) Cancelar y salir"));

  switch (opcion) {
    case 1:
      cantidad = parseInt(prompt("Cantidad de pintas?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Pinta de Cerveza', 250));
      };
      break;

    case 2:
      cantidad = parseInt(prompt("Cantidad de papas fritas?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Papas Fritas con cheddar', 500));
      };
      break;

    case 3:
      cantidad = parseInt(prompt("Cantidad de hamburguesas?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Hamburguesa', 350));
      };
      break;

    case 4:
      cantidad = parseInt(prompt("Cantidad de pizzas?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Pizza', 700));
      };
      break;

    case 5:
      cantidad = parseInt(prompt("Cantidad de gaseosas?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Gaseosa', 100));
      };
      break;

    case 6:
      cantidad = parseInt(prompt("Cantidad de aguas minerales?"));
      for(let i = 0; i < cantidad; i++) {
        pedido.agregarProductos(new Producto('Agua mineral', 70));
      };
      break;

    case 7:
      alert("Pedido realizado!" +
            "\nSubtotal: " + "$" + pedido.getSubTotal() +
            "\nIVA (%21): " + "$" + pedido.getIVA() +
            "\nTotal: " + "$" + pedido.getTotal());
      pedido.getItems().forEach((item) => {
        console.log(item.nombre + ' $' + item.precio);
      });
      salir = true;
      break;

    case 8:
      alert("Pedido cancelado");
      salir = true;
      break;

    default:
      alert("Ingrese una opcion valida");
      break;
  };
} while (!salir);

