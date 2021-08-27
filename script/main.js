const listaProductos = JSON.parse(localStorage.getItem("PRODUCTOS"));
const hamburguesasContainer = document.getElementById("menu_container-hamburguesas");
const picadasContainer = document.getElementById("menu_container-picada");
const veggieContainer = document.getElementById("menu_container-veggie");
const cervezasContainer = document.getElementById("menu_container-cervezas");
const tragosContainer = document.getElementById("menu_container-tragos");
const agregarBtnHambuguesas = document.getElementsByClassName("agregar-btn_hamburguesas");
const agregarBtnPicadas = document.getElementsByClassName("agregar-btn_picadas");
const agregarBtnVeggie = document.getElementsByClassName("agregar-btn_veggie");
const agregarBtnCervezas = document.getElementsByClassName("agregar-btn_cerveza");
const agregarBtnTrago = document.getElementsByClassName("agregar-btn_trago");
const carritoContainer = document.getElementById("carrito_container");
const eliminarItem = document.getElementsByClassName("eliminar-btn");
const totalPedido = document.getElementById("carrito-total");
const aumentarCantidad = document.getElementsByClassName("cantidad_aumentar");
const disminuirCantidad = document.getElementsByClassName("cantidad_diminuir");
const toggleOn = document.getElementById("toggleOn");
const toggleOff = document.getElementById("toggleOff");

toggleOn.addEventListener("click", () => {
  let ventana = document.getElementById("ventana_carrito");
  ventana.style.right = "0";
});

toggleOff.addEventListener("click", () => {
  let ventana = document.getElementById("ventana_carrito");
  ventana.style.right = "-100%";
});



const PEDIDO = [];

class Producto {
  constructor(id, nombre, descripcion, precio, cantidad, img) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.img = img;
  };
};

class Pedido {

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

  static refreshPedido() {
    carritoContainer.innerHTML = "";
    PEDIDO.forEach(producto => {
      let item = document.createElement("div");
      item.className = "carrito-item";
      item.innerHTML = `<div class="carrito-item_detalles">
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
                        </div>`;
      return carritoContainer.appendChild(item);
    });
  };

  static refreshTotal() {
    let total = 0;
    for (let i = 0; i < PEDIDO.length; i++) {
      total += PEDIDO[i].precio * PEDIDO[i].cantidad;
    };
    totalPedido.innerText = `TOTAL: $${total}`;
    return totalPedido;
  };

  static eliminarItem(id) {
    for (let i = 0; i < PEDIDO.length; i++) {
      if (PEDIDO[i].id === id) {
        PEDIDO.splice(i, 1);
        Pedido.refreshPedido();
        Pedido.refreshBtn();
        Pedido.refreshTotal();
      };
    };
  };

  static refreshBtn() {
    for (let i = 0; i < eliminarItem.length; i++) {
      eliminarItem[i].addEventListener("click", () => {
        Pedido.eliminarItem(parseInt(eliminarItem[i].getAttribute("value")));
      });
    };

    for (let i = 0; i < aumentarCantidad.length; i++) {
      aumentarCantidad[i].addEventListener("click", () => {
        Pedido.aumentar(parseInt(aumentarCantidad[i].getAttribute("value")));
      });
    };

    for (let i = 0; i < disminuirCantidad.length; i++) {
      disminuirCantidad[i].addEventListener("click", () => {
        Pedido.disminuir(parseInt(disminuirCantidad[i].getAttribute("value")));
      });
    };
  };

  static aumentar(id) {
    PEDIDO.forEach(item => {
      if (item.id === id) {
        item.cantidad++;
        Pedido.refreshPedido();
        Pedido.refreshBtn()
        Pedido.refreshTotal();
      };
    });
  };

  static disminuir(id) {
    PEDIDO.forEach(item => {
      if (item.id === id) {
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
}

for(hamburguesas of listaProductos.hamburguesas) {
  let index = listaProductos.hamburguesas.indexOf(hamburguesas);
  let hamburguesa = new Producto(hamburguesas.id, 
                                 hamburguesas.nombre, 
                                 hamburguesas.descripcion, 
                                 hamburguesas.precio, 
                                 hamburguesas.cantidad, 
                                 hamburguesas.img);
  let item = document.createElement("div");
  item.className = "item_container";
  item.innerHTML = `<div class="item-img">
                      <img src="${hamburguesa.img}" alt="${hamburguesa.nombre}" />
                    </div>
                    <div class="item-detalles">
                      <h4 class="item-nombre">${hamburguesa.nombre}</h4>
                      <p class="item-descripcion">${hamburguesa.descripcion}</p>
                      <p class="item-precio">$${hamburguesa.precio}</p>
                      <button class="agregar-btn agregar-btn_hamburguesas" value="${hamburguesa.id}">AGREGAR</button>
                    </div>`;
  hamburguesasContainer.appendChild(item);
  agregarBtnHambuguesas[index].addEventListener("click", () => {
    Pedido.agregarProducto(hamburguesa);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

for(picadas of listaProductos.picada) {
  let index = listaProductos.picada.indexOf(picadas);
  let picada = new Producto(picadas.id, 
                                 picadas.nombre, 
                                 picadas.descripcion, 
                                 picadas.precio, 
                                 picadas.cantidad, 
                                 picadas.img);
  let item = document.createElement("div");
  item.className = "item_container";
  item.innerHTML = `<div class="item-img">
                      <img src="${picada.img}" alt="${picada.nombre}" />
                    </div>
                    <div class="item-detalles">
                      <h4 class="item-nombre">${picada.nombre}</h4>
                      <p class="item-descripcion">${picada.descripcion}</p>
                      <p class="item-precio">$${picada.precio}</p>
                      <button class="agregar-btn agregar-btn_picadas" value="${picada.id}">AGREGAR</button>
                    </div>`;
  picadasContainer.appendChild(item);
  agregarBtnPicadas[index].addEventListener("click", () => {
    Pedido.agregarProducto(picada);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

for(veganos of listaProductos.vegano) {
  let index = listaProductos.vegano.indexOf(veganos);
  let vegano = new Producto(veganos.id, 
                                 veganos.nombre, 
                                 veganos.descripcion, 
                                 veganos.precio, 
                                 veganos.cantidad, 
                                 veganos.img);
  let item = document.createElement("div");
  item.className = "item_container";
  item.innerHTML = `<div class="item-img">
                      <img src="${vegano.img}" alt="${vegano.nombre}" />
                    </div>
                    <div class="item-detalles">
                      <h4 class="item-nombre">${vegano.nombre}</h4>
                      <p class="item-descripcion">${vegano.descripcion}</p>
                      <p class="item-precio">$${vegano.precio}</p>
                      <button class="agregar-btn agregar-btn_veggie" value="${vegano.id}">AGREGAR</button>
                    </div>`;
  veggieContainer.appendChild(item);
  agregarBtnVeggie[index].addEventListener("click", () => {
    Pedido.agregarProducto(vegano);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

for(cervezas of listaProductos.cervezas) {
  let index = listaProductos.cervezas.indexOf(cervezas);
  let cerveza = new Producto(cervezas.id, 
                                 cervezas.nombre, 
                                 cervezas.descripcion, 
                                 cervezas.precio, 
                                 cervezas.cantidad, 
                                 cervezas.img);
  let item = document.createElement("div");
  item.className = "item_container";
  item.innerHTML = `<div class="item-img">
                      <img src="${cerveza.img}" alt="${cerveza.nombre}" />
                    </div>
                    <div class="item-detalles">
                      <h4 class="item-nombre">${cerveza.nombre}</h4>
                      <p class="item-descripcion">${cerveza.descripcion}</p>
                      <p class="item-precio">$${cerveza.precio}</p>
                      <button class="agregar-btn agregar-btn_cerveza" value="${cerveza.id}">AGREGAR</button>
                    </div>`;
  cervezasContainer.appendChild(item);
  agregarBtnCervezas[index].addEventListener("click", () => {
    Pedido.agregarProducto(cerveza);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

for(tragos of listaProductos.tragos) {
  let index = listaProductos.tragos.indexOf(tragos);
  let trago = new Producto(tragos.id, 
                                 tragos.nombre, 
                                 tragos.descripcion, 
                                 tragos.precio, 
                                 tragos.cantidad, 
                                 tragos.img);
  let item = document.createElement("div");
  item.className = "item_container";
  item.innerHTML = `<div class="item-img">
                      <img src="${trago.img}" alt="${trago.nombre}" />
                    </div>
                    <div class="item-detalles">
                      <h4 class="item-nombre">${trago.nombre}</h4>
                      <p class="item-descripcion">${trago.descripcion}</p>
                      <p class="item-precio">$${trago.precio}</p>
                      <button class="agregar-btn agregar-btn_trago" value="${trago.id}">AGREGAR</button>
                    </div>`;
  tragosContainer.appendChild(item);
  agregarBtnTrago[index].addEventListener("click", () => {
    Pedido.agregarProducto(trago);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};