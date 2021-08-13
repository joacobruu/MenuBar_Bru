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

localStorage.setItem('productos', JSON.stringify(PRODUCTOS));
const storage = JSON.parse(localStorage.getItem('productos'));

class Producto {
  constructor(id, nombre, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  };
};

class Storage {
  static getAll() {
    return storage;
  };

  static getComidas() {
    let comidas = [];
    for (const item of storage.comidas.hamburguesas) {
      comidas.push(item);
    };
    for (const item of storage.comidas.picada) {
      comidas.push(item);
    };
    for (const item of storage.comidas.vegano) {
      comidas.push(item);
    };

    return comidas;
  };

  static getCervezas() {
    let cervezas = []
    for (const item of storage.cervezas) {
      cervezas.push(item);
    };

    return cervezas;
  };

  static getTragos() {
    let tragos = []
    for (const item of storage.tragos) {
      tragos.push(item);
    };

    return tragos;
  };
};

console.log(Storage.getComidas());
console.log(Storage.getCervezas());
console.log(Storage.getTragos());
console.log(Storage.getAll());