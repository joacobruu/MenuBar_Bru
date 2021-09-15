const app = new ProductoController(new ProductoModel(), new ProductoView());

const router = () => {
  app.listarHamburguesas('#menu_container-hamburguesas');
  app.listarPicadas('#menu_container-picada');
  app.listarVeganos('#menu_container-veggie');
  app.listarCervezas('#menu_container-cervezas');
  app.listarTragos('#menu_container-tragos');

  
}

$(window).on('load', () => {
  router();

  $("#toggleOn").click(() => {
    $("#ventana_carrito").animate({width: "40%"});
    $(".carrito_total").show();
  })
  
  $("#toggleOff").click(() => {
    $("#ventana_carrito").animate({width: "0"});
    $(".carrito_total").hide(600);
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
  if(PEDIDO.length > 0){
    //Validacion de que esten todos los campos completos
    if($("#nombre").val() == "" || $("#direccion").val() == "" || $("#telefono").val() == ""){
      alert("Complete todos los datos");
    } else {
      //Capturo la informacion del formulario y el pedido
      let info = {
        nombre: $("#nombre").val(),
        direccion: $("#direccion").val(),
        telefono: $("#telefono").val(),
        pedido: PEDIDO
      };
  
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
    };    
  } else {
    alert("Su pedido esta vacio!");
  };
});
})