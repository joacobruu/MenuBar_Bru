const PEDIDO = [];

class ProductoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  };

  listarProductos() {
    this.view.listarProductos(this.model, (event) => {
      let hijos = $(event.target).parent().children();
      console.log(hijos[3].value);
      console.log(this.model.productos.find(producto => producto.id == hijos[3].value));
      Pedido.agregarProducto(this.model.productos.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };
};