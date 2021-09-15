const URLJSON = '../storage/productos.json';

const PRODUCTOS = $.getJSON(URLJSON, (res, estado) => {
if(estado == 'success') {
  localStorage.setItem("PRODUCTOS", JSON.stringify(res))
} else {
  console.log(estado);
};
});