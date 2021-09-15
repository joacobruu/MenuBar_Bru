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
    const picadas = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
    this.picadas = picadas.picada.map(producto => new Producto(producto));
    const hamburguesas = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
    this.hamburguesas = hamburguesas.hamburguesas.map(producto => new Producto(producto));
    const veganos = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
    this.veganos = veganos.vegano.map(producto => new Producto(producto));
    const cervezas = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
    this.cervezas = cervezas.cervezas.map(producto => new Producto(producto));
    const tragos = JSON.parse(localStorage.getItem('PRODUCTOS')) || [];
    this.tragos = tragos.tragos.map(producto => new Producto(producto));
  };
};