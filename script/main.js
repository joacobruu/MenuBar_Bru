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
      "precio": "400"
    },
    {
      "id": 18,
      "nombre": "Negroni",
      "descripcion": "Gin, Campari y Vermouth rosso",
      "precio": "300"
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

//Capturando etiquetas
const nombreItem = document.getElementById("nombreItem");
const precio = document.getElementById("precio");
const hamburguesasContainer = document.getElementById("hamburguesasContainer");
const picadaContainer = document.getElementById("picadaContainer");
const veggieContainer = document.getElementById("veggieContainer");
const cervezasContainer = document.getElementById("cervezasContainer");
const tragosContainer = document.getElementById("tragosContainer");
const pedidoContainer = document.getElementById("pedidoContainer");

//Plantillas
// const itemContainer = document.createElement("article");
// itemContainer.className = "menu-item_container";
// tituloItem.innerText = "Hamburguesas";
// itemContainer.appendChild(tituloItem);

/*
        <div class="item">
          <div class="item_detalle">
            <p class="item-nombre">Hamburguesa</p>
            <p class="item-precio">$250</p>
            <button class="eliminar-btn">Eliminar</button>
          </div>
          <div class="item-cantidad">
            <label for="">
              <i class="fas fa-chevron-up up"></i>
            </label>
            <label for="">0</label>
            <label for="">S
              <i class="fas fa-chevron-down down"></i>
            </label>
          </div>
        </div>
*/


class Producto {
  constructor(id, nombre, descripcion, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  };
};

for(hamburguesas of PRODUCTOS.hamburguesas) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${hamburguesas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${hamburguesas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${hamburguesas.precio}</p>
                      </div>
                      <button class="agregar-btn" id="agregar">Agregar</button>`;
  
  hamburguesasContainer.appendChild(item);
};

for(picadas of PRODUCTOS.picada) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${picadas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${picadas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${picadas.precio}</p>
                      </div>
                      <button class="agregar-btn" id="agregar">Agregar</button>`;
  
  picadaContainer.appendChild(item);
};

for(veggie of PRODUCTOS.vegano) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${veggie.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${veggie.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${veggie.precio}</p>
                      </div>
                      <button class="agregar-btn" id="agregar">Agregar</button>`;
  
  veggieContainer.appendChild(item);
};

for(cervezas of PRODUCTOS.cervezas) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${cervezas.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${cervezas.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${cervezas.precio}</p>
                      </div>
                      <button class="agregar-btn" id="agregar">Agregar</button>`;
  
  cervezasContainer.appendChild(item);
};

for(tragos of PRODUCTOS.tragos) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<p id="nombreItem" class="item-nombre">${tragos.nombre}</p>
                      <div class="item-detalle">
                        <p class="detalle-descripcion">
                          ${tragos.descripcion}
                        </p>
                        <p id="precio" class="detalle-precio">$${tragos.precio}</p>
                      </div>
                      <button class="agregar-btn" id="agregar">Agregar</button>`;
  
  tragosContainer.appendChild(item);
};

