// Lista JSON de productos
const PRODUCTOS = {
  "hamburguesas": [
    {
      "id": 1,
      "nombre": "Clasica",
      "descripcion": "Medallones de 120gr, queso danbo, lechuga, tomate y cebolla morada",
      "precio": 520
    },
    {
      "id": 2,
      "nombre": "Ring Burger",
      "descripcion": "Medallones de 120gr, doble cheddar, panceta y aros de cebolla",
      "precio": 630
    },
    {
      "id": 3,
      "nombre": "Americana",
      "descripcion": "Medallones de 120gr, doble cheddar, panceta, huevo y salsa barbacoa",
      "precio": 630
    },
    {
      "id": 4,
      "nombre": "Chicken Crispy",
      "descripcion": "Pollo crispy, queso danbo, palta, panceta y cebolla morada",
      "precio": 520
    }
  ],

  "picada": [
    {
      "id": 5,
      "nombre": "Papas Fritas del Chef",
      "descripcion": "Cheddar, panceta y Verdeo",
      "precio": 580
    },
    {
      "id": 6,
      "nombre": "Bastones de Muzzarella",
      "descripcion": "Acompañados con una salsa romesco casera",
      "precio": 590
    },
    {
      "id": 7,
      "nombre": "Chicken Fingers",
      "descripcion": "Rebosados con sesamo negro y blanco, acompañados con un dip de mostaza y miel",
      "precio": 500
    }
  ],

  "vegano": [
    {
      "id": 8,
      "nombre": "hamburguesa de Falafel",
      "descripcion": "Hamburguesa de falafel, queso danbo, rucula y tomates cherry",
      "precio": 520
    },
    {
      "id": 9,
      "nombre": "Hamburguesa de Lentejas",
      "descripcion": "Hamburguesa de lentejas, queso danbo, rucula y tomates cherry",
      "precio": 630
    },
    {
      "id": 10,
      "nombre": "Bombas de Falafel",
      "descripcion": "Acompañadas con un dip de alioli",
      "precio": 500
    }
  ],

  "cervezas": [
    {
      "id": 11,
      "nombre": "Blonde Ale",
      "descripcion": "BABA",
      "precio": 250
    },
    {
      "id": 12,
      "nombre": "Honey",
      "descripcion": "BABA",
      "precio": 250
    },
    {
      "id": 13,
      "nombre": "Scotch",
      "descripcion": "BIERHAUS",
      "precio": 250
    },
    {
      "id": 14,
      "nombre": "APA",
      "descripcion": "MINGA",
      "precio": 250
    },
    {
      "id": 15,
      "nombre": "Red IPA",
      "descripcion": "BABA",
      "precio": 250
    },
    {
      "id": 16,
      "nombre": "American IPA",
      "descripcion": "BIERHAUS",
      "precio": 250
    }
  ],

  "tragos": [
    {
      "id": 17,
      "nombre": "Old Fashioned",
      "descripcion": "Bourbon, azucar y Angostura: Perfume de naranja",
      "precio": 400
    },
    {
      "id": 18,
      "nombre": "Negroni",
      "descripcion": "Gin, Campari y Vermouth rosso",
      "precio": 300
    },
    {
      "id": 19,
      "nombre": "Mojito Cubano",
      "descripcion": "Ron, azucar, jugo de limon, menta y Angostura",
      "precio": 350
    },
    {
      "id": 20,
      "nombre": "Fernet Branca",
      "descripcion": "Con Coca-Cola",
      "precio": 300
    },
    {
      "id": 21,
      "nombre": "Cuba Libre",
      "descripcion": "Ron con Coca-Cola y limon",
      "precio": 300
    }
  ]
};

//Capturando contenedores y botones del html
const nombreItem = document.getElementById("nombreItem");
const precio = document.getElementById("precio");
const hamburguesasContainer = document.getElementById("hamburguesasContainer");
const picadaContainer = document.getElementById("picadaContainer");
const veggieContainer = document.getElementById("veggieContainer");
const cervezasContainer = document.getElementById("cervezasContainer");
const tragosContainer = document.getElementById("tragosContainer");
const pedidoContainer = document.getElementById("pedidoContainer");
const agregarHamburguesas = document.getElementsByClassName("agregar-btn_hamburguesas");
const agregarPicada = document.getElementsByClassName("agregar-btn_picada");
const agregarVegano = document.getElementsByClassName("agregar-btn_vegano");
const agregarcerveza = document.getElementsByClassName("agregar-btn_cervezas");
const agregarTrago = document.getElementsByClassName("agregar-btn_tragos");
const totalPedido = document.getElementById("totalPedido");
const eliminarBtn = document.getElementsByClassName("eliminar-btn");

const PEDIDO = [];

class Producto {
  constructor(id, nombre, descripcion, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  };
};


//Clase pedido que me ayuda a mostrar los items que se van agregando
class Pedido {
  //Funcion para mostrar e ir sumando el total del pedido
  static refreshTotal(){
    let total = 0;
    for (let i = 0; i < PEDIDO.length; i++) {
      total += PEDIDO[i].precio;
    };
    totalPedido.innerText = `Total: $${total}`;
    return totalPedido;
  };

  //Funcion para eliminar item del pedido
  static eliminarItem(id){
    for(let i = 0; i < PEDIDO.length; i++){
      if(PEDIDO[i].id  === id){
        PEDIDO.splice(i, 1);
        Pedido.refreshPedido();
        Pedido.refreshBtn();
        Pedido.refreshTotal();
      };
    };
  };

  //Funcion para agregar el event listener a cada boton de eliminar del pedido
  static refreshBtn(){
    for(let i = 0; i < eliminarBtn.length; i++){
      eliminarBtn[i].addEventListener("click", () => {
        Pedido.eliminarItem(parseInt(eliminarBtn[i].getAttribute("value")));
      });
    };
  };
  
  //Funcion para agregar los items a la seccion de pedido
  static refreshPedido(){
    pedidoContainer.innerHTML = "";
    PEDIDO.forEach(items => {
      let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `<div class="item_detalle">
                            <p class="item-nombre">${items.nombre}</p>
                            <p class="item-precio">$${items.precio}</p>
                            <button class="eliminar-btn" value="${items.id}">Eliminar</button>
                          </div>
                          <div class="item-cantidad">
                            <label for="">
                              <i class="fas fa-chevron-up up"></i>
                            </label>
                            <label for="">0</label>
                            <label for="">
                              <i class="fas fa-chevron-down down"></i>
                            </label>
                          </div>`;
        return pedidoContainer.appendChild(item);
    });
  };
};


//Ciclo para mostrar los items en el HTML, estos items son llamados desde el JSON (Hamburguesas)
for (hamburguesas of PRODUCTOS.hamburguesas) {
  //capturo el indexOF de cada item para poder agregar un even listener unico a cada boton
  let index = PRODUCTOS.hamburguesas.indexOf(hamburguesas);
  //creo una nueva instancia de producto con los datos del item
  let hamburguesa = new Producto(hamburguesas.id, hamburguesas.nombre, hamburguesas.descripcion, hamburguesas.precio, 1);
  //Creo un nuevo elemento html y le asigno una clase
  let item = document.createElement("div");
  item.className = "item";
  //preparo la plantilla para cada producto con sus datos
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${hamburguesas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${hamburguesas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${hamburguesas.precio}</p>
                      </div>
                      <button class="agregar-btn agregar-btn_hamburguesas" id="agregar">Agregar</button>`;

  //Inserto el producto en el html
  hamburguesasContainer.appendChild(item);
  //Event listener para poder agregar el producto a pedido
  agregarHamburguesas[index].addEventListener("click", () => {
    PEDIDO.push(hamburguesa);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

//Ciclo para mostrar los items en el HTML, estos items son llamados desde el JSON (Picadas)
for (picadas of PRODUCTOS.picada) {
  let index = PRODUCTOS.picada.indexOf(picadas);
  let picada = new Producto(picadas.id, picadas.nombre, picadas.descripcion, picadas.precio, 1);
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${picadas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${picadas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${picadas.precio}</p>
                      </div>
                      <button class="agregar-btn agregar-btn_picada" id="agregar">Agregar</button>`;

  picadaContainer.appendChild(item);
  agregarPicada[index].addEventListener("click", () => {
    PEDIDO.push(picada);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

//Ciclo para mostrar los items en el HTML, estos items son llamados desde el JSON (Vegano)
for (veggie of PRODUCTOS.vegano) {
  let index = PRODUCTOS.vegano.indexOf(veggie);
  let vegano = new Producto(veggie.id, veggie.nombre, veggie.descripcion, veggie.precio, 1);
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${veggie.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${veggie.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${veggie.precio}</p>
                      </div>
                      <button class="agregar-btn agregar-btn_vegano" id="agregar">Agregar</button>`;

  veggieContainer.appendChild(item);
  agregarVegano[index].addEventListener("click", () => {
    PEDIDO.push(vegano);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

//Ciclo para mostrar los items en el HTML, estos items son llamados desde el JSON (Cervezas)
for (cervezas of PRODUCTOS.cervezas) {
  let index = PRODUCTOS.cervezas.indexOf(cervezas);
  let cerveza = new Producto(cervezas.id, cervezas.nombre, cervezas.descripcion, cervezas.precio, 1);
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${cervezas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${cervezas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${cervezas.precio}</p>
                      </div>
                      <button class="agregar-btn agregar-btn_cervezas" id="agregar">Agregar</button>`;

  cervezasContainer.appendChild(item);
  agregarcerveza[index].addEventListener("click", () => {
    PEDIDO.push(cerveza);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

//Ciclo para mostrar los items en el HTML, estos items son llamados desde el JSON (Tragos)
for (tragos of PRODUCTOS.tragos) {
  let index = PRODUCTOS.tragos.indexOf(tragos);
  let trago = new Producto(tragos.id, tragos.nombre, tragos.descripcion, tragos.precio, 1);
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${tragos.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${tragos.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${tragos.precio}</p>
                      </div>
                      <button class="agregar-btn agregar-btn_tragos" id="agregar">Agregar</button>`;

  tragosContainer.appendChild(item);
  agregarTrago[index].addEventListener("click", () => {
    PEDIDO.push(trago);
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};


