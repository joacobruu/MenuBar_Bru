const productos = {
  "bar":
    {
      "comidas":
        {
          "hamburguesas" : [
            {
              "id": "01",
              "nombre": "Clasica",
              "descripcion": "Medallones de 120gr, queso danbo, lechuga, tomate y cebolla morada",
              "precio": "520"
            },
            {
              "id": "02",
              "nombre": "Ring Burger",
              "descripcion": "Medallones de 120gr, doble cheddar, panceta y aros de cebolla",
              "precio": "630"
            },
            {
              "id": "03",
              "nombre": "Americana",
              "descripcion": "Medallones de 120gr, doble cheddar, panceta, huevo y salsa barbacoa",
              "precio": "630"
            },
            {
              "id": "04",
              "nombre": "Chicken Crispy",
              "descripcion": "Pollo crispy, queso danbo, palta, panceta y cebolla morada",
              "precio": "520"
            }
          ],

          "picada": [
              {
                "id": "05",
                "nombre": "Papas Fritas del Chef",
                "descripcion": "Cheddar, panceta y Verdeo",
                "precio": "580"
              },
              {
                "id": "06",
                "nombre": "Bastones de Muzzarella",
                "descripcion": "Acompañados con una salsa romesco casera",
                "precio": "590"
              },
              {
                "id": "07",
                "nombre": "Chicken Fingers",
                "descripcion": "Rebosados con sesamo negro y blanco, acompañados con un dip de mostaza y miel",
                "precio": "500"
              }
          ],

          "vegano" : [
            {
              "id": "08",
              "nombre": "hamburguesa de Falafel",
              "descripcion": "Hamburguesa de falafel, queso danbo, rucula y tomates cherry",
              "precio": "520"
            },
            {
              "id": "09",
              "nombre": "Hamburguesa de Lentejas",
              "descripcion": "Hamburguesa de lentejas, queso danbo, rucula y tomates cherry",
              "precio": "630"
            },
            {
              "id": "10",
              "nombre": "Bombas de Falafel",
              "descripcion": "Acompañadas con un dip de alioli",
              "precio": "500"
            }
          ]
        },

      "cervezas" : [
        {
          "id": "11",
          "nombre": "Blonde Ale",
          "cerveceria": "BABA",
          "precio": "250"
        },
        {
          "id": "12",
          "nombre": "Honey",
          "cerveceria": "BABA",
          "precio": "250"
        },
        {
          "id": "13",
          "nombre": "Scotch",
          "cerveceria": "BIERHAUS",
          "precio": "250"
        },
        {
          "id": "14",
          "nombre": "APA",
          "cerveceria": "MINGA",
          "precio": "250"
        },
        {
          "id": "15",
          "nombre": "Red IPA",
          "cerveceria": "BABA",
          "precio": "250"
        },
        {
          "id": "16",
          "nombre": "American IPA",
          "cerveceria": "BIERHAUS",
          "precio": "250"
        }
      ],

      "tragos": [
        {
          "id": "17",
          "nombre": "Old Fashioned",
          "descripcion": "Bourbon, azucar y Angostura: Perfume de naranja",
          "precio": "400"
        },
        {
          "id": "18",
          "nombre": "Negroni",
          "descripcion": "Gin, Campari y Vermouth rosso",
          "precio": "300"
        },
        {
          "id": "19",
          "nombre": "Mojito Cubano",
          "descripcion": "Ron, azucar, jugo de limon, menta y Angostura",
          "precio": "350"
        },
        {
          "id": "20",
          "nombre": "Fernet Branca",
          "descripcion": "Con Coca-Cola",
          "precio": "300"
        },
        {
          "id": "21",
          "nombre": "Cuba Libre",
          "descripcion": "Ron con Coca-Cola y limon",
          "precio": "300"
        }
      ]
    }
};

const lista = JSON.stringify(productos);

const bar = productos.bar;

console.log(productos.bar.comidas.hamburguesas[3]);

class Producto {
  constructor(id, nombre, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  };
};

const hamburguesas = [];

productos.bar.comidas.hamburguesas.forEach((item) => {
  hamburguesas.push(new Producto(item.id, item.nombre, item.descripcion, item.precio));
});

let total = 0;

console.log(hamburguesas);

console.log(hamburguesas[0].precio);

hamburguesas.forEach((item) => {
  total += item.precio;
});

console.log(total);

