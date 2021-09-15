class Producto {
  constructor(data) {
    this.id = data.id;
    this.nombre = data.nombre.toUpperCase();
    this.descripcion = data.descripcion;
    this.cantidad = 0;
    this.precio = data.precio;
    this.img = data.img;
  };
};

class ProductoModel {
  constructor() {
    const picadas = PRODUCTOS || [];
    this.picadas = picadas.picada.map(producto => new Producto(producto));
    const hamburguesas = PRODUCTOS || [];
    this.hamburguesas = hamburguesas.hamburguesas.map(producto => new Producto(producto));
    const veganos = PRODUCTOS || [];
    this.veganos = veganos.vegano.map(producto => new Producto(producto));
    const cervezas = PRODUCTOS || [];
    this.cervezas = cervezas.cervezas.map(producto => new Producto(producto));
    const tragos = PRODUCTOS || [];
    this.tragos = tragos.tragos.map(producto => new Producto(producto));
  };
};