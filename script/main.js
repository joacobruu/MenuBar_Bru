/*Probando funcionalidades para la pagina*/
const togglePedidos = (id) => {
  const e = document.querySelector(id);
  if(e.style.display == 'none') {
    e.style.display = 'flex';
  } else {
    e.style.display = 'none';
  };
};

const PRODUCTOS = {
  "nombre": "Bar",
  "direccion": "Calle falsa 123 - Vicente Lopez",
  "comidas": {
    "hamburguesas" : [
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

    "vegano" : [
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
    ]
  },
  "cervezas" : [
    {
      "id": 11,
      "nombre": "Blonde Ale",
      "cerveceria": "BABA",
      "precio": 250
    },
    {
      "id": 12,
      "nombre": "Honey",
      "cerveceria": "BABA",
      "precio": 250
    },
    {
      "id": 13,
      "nombre": "Scotch",
      "cerveceria": "BIERHAUS",
      "precio": 250
    },
    {
      "id": 14,
      "nombre": "APA",
      "cerveceria": "MINGA",
      "precio": 250
    },
    {
      "id": 15,
      "nombre": "Red IPA",
      "cerveceria": "BABA",
      "precio": 250
    },
    {
      "id": 16,
      "nombre": "American IPA",
      "cerveceria": "BIERHAUS",
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
const pedido = [];
let salir = false;
let opcion = 0;
let cantidad;
const IVA = 0.21;

/*///CLASE PRODUCTOS///*/
class Producto {
  constructor(id, nombre, descripcion, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  };
};

do {
  let opcion = parseInt(prompt("Que desea añadir a su pedido? \n1) Bebidas" + 
                         "\n2) Para Picar" +
                         "\n3) Para Comer" +
                         "\n\n4) Pedido Completo" +
                         "\n5) Cancelar y salir"));

  switch (opcion) {
    case 1:
      do {
        let opcion = parseInt(prompt());
        
        switch (opcion) {
          case 1:
            
            break;
        
          default:
            break;
        }
      } while (!salir);
      break;

    case 2:
      break;

    case 3:
      break;

    case 4:
      alert("Pedido realizado!" +
            "\nSubtotal: " + "$" + pedido.getSubTotal() +
            "\nIVA (%21): " + "$" + pedido.getIVA() +
            "\nTotal: " + "$" + pedido.getTotal());
      pedido.getItems().forEach((item) => {
        console.log(item.nombre + ' $' + item.precio);
      });
      salir = true;
      break;

    case 5:
      alert("Pedido cancelado");
      salir = true;
      break;

    default:
      alert("Ingrese una opcion valida");
      break;
  };
} while (!salir);

