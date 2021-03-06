const app = new ProductoController(new ProductoModel(), new ProductoView());
const APIURL = 'https://jsonplaceholder.typicode.com/posts';

//Inicializo el mapa de google centrado en Bs. As.
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.59196284537173, lng: -58.46002743356553 },
    zoom: 10,
  });
};

const router = () => {

  //Evento para abrir y cerrar el carrito
  app.listarProductos();
    $("#toggleOn").click(() => {
    $("#ventana_carrito").animate({ width: "40%" });
    $(".carrito_total").show();
  });

  $("#toggleOff").click(() => {
    $("#ventana_carrito").animate({ width: "0" });
    $(".carrito_total").hide(600);
  });

  //Api de google maps y Geolocation
  $('#subDire').click(() => {
    var direccion = $('#direccion').val();
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyCQetB7vKtIdydmxA1ubI-zk60PA4PKRwI`;
    $.get(url, function (data) {
      //Obtengo la localizacion y la paso por Geolocation API
      let miUbi = { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng };
      console.log(miUbi);

      //Centro el mapa en MiUIbi
      let map = new google.maps.Map(document.getElementById("map"), {
        center: miUbi,
        zoom: 15,
      });
      //Agergo el marcador al mapa
      new google.maps.Marker({
        position: miUbi,
        map,
        title: "Ubicacion",
      });
    });
  });

    $("#comprarBtn").on("click", () => {
    //Limpio el formulario
    $("#tabla").empty();
    $("#nombre").val("");
    $("#direccion").val("");
    $("#telefono").val("");
    let total = 0;

    //Agrego un detalle del pedido en el formulario
    PEDIDO.forEach(item => {
      $("#tabla").append(`<tr>
                            <th>${item.nombre}</th>
                            <th>x${item.cantidad}</th>
                            <th>$${item.precio * item.cantidad}</th>
                          </tr>`);
      total += item.precio * item.cantidad;
    });
    $("#tabla").append(`<tr>
                            <th>TOTAL</th>
                            <th></th>
                            <th>$${total}</th>
                          </tr>`);
  });

  //Evento para que se abra el formulario
  $("#comprarForm").on("click", (e) => {
    e.preventDefault();
    if (PEDIDO.length > 0) {
      //Validacion de que esten todos los campos completos
      if ($("#nombre").val() == "" || $("#direccion").val() == "" || $("#telefono").val() == "") {
        alert("Complete todos los datos");
      } else {
        //Capturo la informacion del formulario y el pedido
        let info = {
          nombre: $("#nombre").val(),
          direccion: $("#direccion").val(),
          telefono: $("#telefono").val(),
          pedido: PEDIDO
        };

        localStorage.setItem("UltimoPEDIDO", JSON.stringify(info));
        console.log("EXITOSO");

        //Envio los datos a la api
        $.ajax({
          method: "POST",
          url: APIURL,
          data: info,
          success: (res) => {
            alert("Pedido exitoso!");
            console.log(res);
          }
        });

        PEDIDO.length = 0;
      };
    } else {
      alert("Su pedido esta vacio!");
    };
  });

  $("#repetirBtn").on("click", () => {
    let info = JSON.parse(localStorage.getItem("UltimoPEDIDO"));
    $("#tabla").empty();
    $("#nombre").val(info.nombre);
    $("#direccion").val(info.direccion);
    $("#telefono").val(info.telefono);
    let total = 0;

    //Agrego un detalle del pedido en el formulario
    info.pedido.forEach(item => {
      PEDIDO.push(item);
      $("#tabla").append(`<tr>
                            <th>${item.nombre}</th>
                            <th>x${item.cantidad}</th>
                            <th>$${item.precio * item.cantidad}</th>
                          </tr>`);
      total += item.precio * item.cantidad;
    });
    $("#tabla").append(`<tr>
                            <th>TOTAL</th>
                            <th></th>
                            <th>$${total}</th>
                          </tr>`);
  });

  $("#vaciarBtn").on("click", () => {
    PEDIDO.length = 0;
    Pedido.refreshPedido();
    Pedido.refreshBtn();
    Pedido.refreshTotal();
  });
};

$(window).on('load', () => {
  router();
});