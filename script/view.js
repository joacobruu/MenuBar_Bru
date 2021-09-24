class ProductoView {
    listarProductos(data, callback) {
      let padre;
      for(const producto of data.productos) {
        if(producto.tipo == "HAMBURGUESA") {
          padre = "#menu_container-hamburguesas";
        } else if(producto.tipo == "PICADA") {
          padre = "#menu_container-picada"
        } else if(producto.tipo == "VEGANO") {
          padre = "#menu_container-veggie";
        } else if(producto.tipo == "CERVEZA") {
          padre = "#menu_container-cervezas";
        } else if(producto.tipo == "TRAGO") {
          padre = "#menu_container-tragos";
        };

        $(padre).append(`<div class="item_container">
                          <div class="item-img">
                            <img src="${producto.img}" alt="${producto.nombre}" />
                          </div>
                          <div class="item-detalles">
                            <h4 class="item-nombre">${producto.nombre}</h4>
                            <p class="item-descripcion">${producto.descripcion}</p>
                            <p class="item-precio">$${producto.precio}</p>
                            <button class="agregar-btn${producto.id}" value="${producto.id}">AGREGAR</button>
                          </div>
                        </div>`);
        $(`.agregar-btn${producto.id}`).click(callback);
      };
    };
};

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
}