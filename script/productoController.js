const PEDIDO = [];

class Pedido {
  static refreshPedido() {
    $("#carrito_container").empty();
    PEDIDO.forEach(producto => {
      return $("#carrito_container").append(`<div class="carrito-item">
                                              <div class="carrito-item_detalles">
                                                <p class="carrito-item_nombre">${producto.nombre}</p>
                                                <p class="carrito-item_precio">$${producto.precio}</p>
                                                <button class="eliminar-btn" value="${producto.id}">Eliminar</button>
                                              </div>
                                              <div class="carrito_cantidad">
                                                <label class="cantidad_aumentar" value="${producto.id}">
                                                  <i class="fas fa-chevron-up"></i>
                                                </label>
                                                <label class="cantidad">${producto.cantidad}</label>
                                                <label class="cantidad_diminuir" value="${producto.id}">
                                                  <i class="fas fa-chevron-down"></i>
                                                </label>
                                              </div>
                                            </div>`);
    });
  };

  static agregarProducto(producto) {
    let enPedido = false;
    PEDIDO.forEach(item => {
      if (item.id === producto.id) {
        item.cantidad++;
        enPedido = true;
      };
    });
    if (!enPedido) {
      producto.cantidad = 1;
      PEDIDO.push(producto);
    };
  };

  static refreshTotal() {
    let total = 0;
    for (let i = 0; i < PEDIDO.length; i++) {
      total += PEDIDO[i].precio * PEDIDO[i].cantidad;
    };
    return $("#carrito-total").text(`TOTAL: $${total}`);
  };

  static prueba(index, item) {
    console.log(item.find(index == item.id)); 
  };

  static eliminarItem(id) {
    for (let i = 0; i < PEDIDO.length; i++) {
      if (PEDIDO[i].id == id) {
        PEDIDO.splice(i, 1);
        Pedido.refreshPedido();
        Pedido.refreshBtn();
        Pedido.refreshTotal();
      };
    };
  };

  static aumentar(id) {
    PEDIDO.forEach(item => {
      if (item.id == id) {
        item.cantidad++;
        Pedido.refreshPedido();
        Pedido.refreshBtn()
        Pedido.refreshTotal();
      };
    });
  };

  static disminuir(id) {
    PEDIDO.forEach(item => {
      if (item.id == id) {
        item.cantidad--;
        if (item.cantidad === 0) {
          PEDIDO.splice(PEDIDO.indexOf(item), 1);
        };
      };
      Pedido.refreshPedido();
      Pedido.refreshBtn()
      Pedido.refreshTotal();
    });
  };

  static refreshBtn() {
    $(".eliminar-btn").click( (event) => {
      let hijos = $(event.target).parent().children();
      Pedido.eliminarItem(hijos[2].value);
    });

    $(".cantidad_aumentar").click( (event) => {
      let hijos = $(event.target).parent().parent().children();
      Pedido.aumentar(hijos[0].attributes.value.value);
    });

    $(".cantidad_diminuir").click( (event) => {
      let hijos = $(event.target).parent().parent().children();
      Pedido.disminuir(hijos[0].attributes.value.value);
    });
  };
};

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
      console.log(hijos[3].value);
      Pedido.agregarProducto(this.productoModel.picadas.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarVeganos(app) {
    this.productoView.mostrarVeganos(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      console.log(hijos[3].value);
      Pedido.agregarProducto(this.productoModel.veganos.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarCervezas(app) {
    this.productoView.mostrarCervezas(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      console.log(hijos[3].value);
      Pedido.agregarProducto(this.productoModel.cervezas.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };

  listarTragos(app) {
    this.productoView.mostrarTragos(app, this.productoModel, (event) => {
      let hijos = $(event.target).parent().children();
      console.log(hijos[3].value);
      Pedido.agregarProducto(this.productoModel.tragos.find(producto => producto.id == hijos[3].value));
      Pedido.refreshPedido();
      Pedido.refreshTotal();
      Pedido.refreshBtn();
    });
  };
};