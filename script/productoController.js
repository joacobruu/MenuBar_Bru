const PEDIDO = [];

class ProductoController {
  constructor(productoModel, productoView) {
    this.productoModel = productoModel;
    this.productoView = productoView;
  };

  listarHamburguesas(app) {
    this.productoView.mostrarHamburguesas(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.agregarProducto(this.productoModel.hamburguesas.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };
  
  listarPicadas(app) {
    this.productoView.mostrarPicadas(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.agregarProducto(this.productoModel.picadas.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarVeganos(app) {
    this.productoView.mostrarVeganos(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.agregarProducto(this.productoModel.veganos.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarCervezas(app) {
    this.productoView.mostrarCervezas(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.agregarProducto(this.productoModel.cervezas.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarTragos(app) {
    this.productoView.mostrarTragos(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.agregarProducto(this.productoModel.tragos.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };
};