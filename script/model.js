class Producto {
    constructor(data) {
      this.id = data.id;
      this.nombre = data.nombre.toUpperCase();
      this.descripcion = data.descripcion;
      this.cantidad = 0;
      this.precio = data.precio;
      this.img = data.img;
      this.tipo = data.tipo.toUpperCase();
    };
  };

  class ProductoModel {
    constructor() {
        const productos = JSON.parse(localStorage.getItem("PRODUCTOS")) || [];
        this.productos = productos.productos.map(producto => new Producto(producto));
    };
  };