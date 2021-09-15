class ProductoView {
  mostrarHamburguesas(padre, data, callback) {
    $(padre).empty();
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
  };

  mostrarPicadas(padre, data, callback){
    $(padre).empty();
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
  };

  mostrarVeganos(padre, data, callback){
    $(padre).empty();
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
  };

  mostrarCervezas(padre, data, callback){
    $(padre).empty();
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
  };

  mostrarTragos(padre, data, callback){
    $(padre).empty();
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
  };
};
