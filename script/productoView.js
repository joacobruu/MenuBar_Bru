class ProductoView {

  listarProductos(padre, data, callback) {
    data.items.forEach(producto => {
      if(producto.tipo.toUpperCase() == "HAMBURGEUSA") {
        $(padre).append(`<div class="item_container">
                          <div class="item-img">
                            <img src="${producto.img}" alt="${producto.nombre}" />
                          </div>
                           <div class="item-detalles">
                            <h4 class="item-nombre">${producto.nombre}</h4>
                            <p class="item-descripcion">${producto.descripcion}</p>
                            <p class="item-precio">$${producto.precio}</p>
                            <button class="agregar-btn agregar-btn_hamburguesas" value="${producto.id}">AGREGAR</button>
                          </div>
                        </div>`);
        $(".agregar-btn_hamburguesas").click(callback);
      }
    });
    
    switch (padre.tipo) {
      case '#menu_container-hamburguesas':  $(padre).empty();
                                            for(const hamburguesa of data.hamburguesas) {    
                                              //Agrego al DOM la plantilla de cada item con JQuery
                                                $(padre).append(`<div class="item_container">
                                                                  <div class="item-img">
                                                                    <img src="${hamburguesa.img}" alt="${hamburguesa.nombre}" />
                                                                  </div>
                                                                  <div class="item-detalles">
                                                                    <h4 class="item-nombre">${hamburguesa.nombre}</h4>
                                                                    <p class="item-descripcion">${hamburguesa.descripcion}</p>
                                                                    <p class="item-precio">$${hamburguesa.precio}</p>
                                                                    <button class="agregar-btn agregar-btn_hamburguesas" value="${hamburguesa.id}">AGREGAR</button>
                                                                  </div>
                                                                </div>`);
                                            };
                                            $(".agregar-btn_hamburguesas").click(callback);
                                            break;
      
      case '#menu_container-picada': $(padre).empty();
                                    for(const picada of data.picadas) {    
                                      $(padre).append(`<div class="item_container">
                                                                  <div class="item-img">
                                                                    <img src="${picada.img}" alt="${picada.nombre}" />
                                                                  </div>
                                                                  <div class="item-detalles">
                                                                    <h4 class="item-nombre">${picada.nombre}</h4>
                                                                    <p class="item-descripcion">${picada.descripcion}</p>
                                                                    <p class="item-precio">$${picada.precio}</p>
                                                                    <button class="agregar-btn agregar-btn_picada" value="${picada.id}">AGREGAR</button>
                                                                  </div>
                                                                </div>`);
                                    };
                                    $(".agregar-btn_picada").click(callback);
                                    break;
                  
      case '#menu_container-veggie': $(padre).empty();
                                    for(const vegano of data.veganos) {    
                                      $(padre).append(`<div class="item_container">
                                                                  <div class="item-img">
                                                                    <img src="${vegano.img}" alt="${vegano.nombre}" />
                                                                  </div>
                                                                  <div class="item-detalles">
                                                                    <h4 class="item-nombre">${vegano.nombre}</h4>
                                                                    <p class="item-descripcion">${vegano.descripcion}</p>
                                                                    <p class="item-precio">$${vegano.precio}</p>
                                                                    <button class="agregar-btn agregar-btn_veggie" value="${vegano.id}">AGREGAR</button>
                                                                  </div>
                                                                </div>`);
                                    };
                                    $(".agregar-btn_veggie").click(callback);
                                    break;

      case '#menu_container-cervezas': $(padre).empty();
                                      for(const cerveza of data.cervezas) {    
                                        $(padre).append(`<div class="item_container">
                                                                    <div class="item-img">
                                                                      <img src="${cerveza.img}" alt="${cerveza.nombre}" />
                                                                    </div>
                                                                    <div class="item-detalles">
                                                                      <h4 class="item-nombre">${cerveza.nombre}</h4>
                                                                      <p class="item-descripcion">${cerveza.descripcion}</p>
                                                                      <p class="item-precio">$${cerveza.precio}</p>
                                                                      <button class="agregar-btn agregar-btn_cervezas" value="${cerveza.id}">AGREGAR</button>
                                                                    </div>
                                                                  </div>`);
                                      };
                                      $(".agregar-btn_cervezas").click(callback);
                                      break;

      case '#menu_container-tragos': $(padre).empty();
                                    for(const trago of data.tragos) {    
                                      $(padre).append(`<div class="item_container">
                                                                  <div class="item-img">
                                                                    <img src="${trago.img}" alt="${trago.nombre}" />
                                                                  </div>
                                                                  <div class="item-detalles">
                                                                    <h4 class="item-nombre">${trago.nombre}</h4>
                                                                    <p class="item-descripcion">${trago.descripcion}</p>
                                                                    <p class="item-precio">$${trago.precio}</p>
                                                                    <button class="agregar-btn agregar-btn_tragos" value="${trago.id}">AGREGAR</button>
                                                                  </div>
                                                                </div>`);
                                    };
                                    $(".agregar-btn_tragos").click(callback);
                                    break;
    
      default:
        break;
    };
  };
  // mostrarHamburguesas(padre, data, callback) {
  //   $(padre).empty();
  //   for(const hamburguesa of data.hamburguesas) {    
  //     //Agrego al DOM la plantilla de cada item con JQuery
  //       $(padre).append(`<div class="item_container">
  //                          <div class="item-img">
  //                           <img src="${hamburguesa.img}" alt="${hamburguesa.nombre}" />
  //                         </div>
  //                         <div class="item-detalles">
  //                           <h4 class="item-nombre">${hamburguesa.nombre}</h4>
  //                           <p class="item-descripcion">${hamburguesa.descripcion}</p>
  //                           <p class="item-precio">$${hamburguesa.precio}</p>
  //                           <button class="agregar-btn agregar-btn_hamburguesas" value="${hamburguesa.id}">AGREGAR</button>
  //                         </div>
  //                       </div>`);
  //   };
  //   $(".agregar-btn_hamburguesas").click(callback);
  // };

  // mostrarPicadas(padre, data, callback){
  //   $(padre).empty();
  //   for(const picada of data.picadas) {    
  //     $(padre).append(`<div class="item_container">
  //                                 <div class="item-img">
  //                                   <img src="${picada.img}" alt="${picada.nombre}" />
  //                                 </div>
  //                                 <div class="item-detalles">
  //                                   <h4 class="item-nombre">${picada.nombre}</h4>
  //                                   <p class="item-descripcion">${picada.descripcion}</p>
  //                                   <p class="item-precio">$${picada.precio}</p>
  //                                   <button class="agregar-btn agregar-btn_picada" value="${picada.id}">AGREGAR</button>
  //                                 </div>
  //                               </div>`);
  //   };
  //   $(".agregar-btn_picada").click(callback);
  // };

  // mostrarVeganos(padre, data, callback){
  //   $(padre).empty();
  //   for(const vegano of data.veganos) {    
  //     $(padre).append(`<div class="item_container">
  //                                 <div class="item-img">
  //                                   <img src="${vegano.img}" alt="${vegano.nombre}" />
  //                                 </div>
  //                                 <div class="item-detalles">
  //                                   <h4 class="item-nombre">${vegano.nombre}</h4>
  //                                   <p class="item-descripcion">${vegano.descripcion}</p>
  //                                   <p class="item-precio">$${vegano.precio}</p>
  //                                   <button class="agregar-btn agregar-btn_veggie" value="${vegano.id}">AGREGAR</button>
  //                                 </div>
  //                               </div>`);
  //   };
  //   $(".agregar-btn_veggie").click(callback);
  // };

  // mostrarCervezas(padre, data, callback){
  //   $(padre).empty();
  //   for(const cerveza of data.cervezas) {    
  //     $(padre).append(`<div class="item_container">
  //                                 <div class="item-img">
  //                                   <img src="${cerveza.img}" alt="${cerveza.nombre}" />
  //                                 </div>
  //                                 <div class="item-detalles">
  //                                   <h4 class="item-nombre">${cerveza.nombre}</h4>
  //                                   <p class="item-descripcion">${cerveza.descripcion}</p>
  //                                   <p class="item-precio">$${cerveza.precio}</p>
  //                                   <button class="agregar-btn agregar-btn_cervezas" value="${cerveza.id}">AGREGAR</button>
  //                                 </div>
  //                               </div>`);
  //   };
  //   $(".agregar-btn_cervezas").click(callback);
  // };

  // mostrarTragos(padre, data, callback){
  //   $(padre).empty();
  //   for(const trago of data.tragos) {    
  //     $(padre).append(`<div class="item_container">
  //                                 <div class="item-img">
  //                                   <img src="${trago.img}" alt="${trago.nombre}" />
  //                                 </div>
  //                                 <div class="item-detalles">
  //                                   <h4 class="item-nombre">${trago.nombre}</h4>
  //                                   <p class="item-descripcion">${trago.descripcion}</p>
  //                                   <p class="item-precio">$${trago.precio}</p>
  //                                   <button class="agregar-btn agregar-btn_tragos" value="${trago.id}">AGREGAR</button>
  //                                 </div>
  //                               </div>`);
  //   };
  //   $(".agregar-btn_tragos").click(callback);
  // };
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
};
