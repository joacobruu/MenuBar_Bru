$.getJSON('../storage/productos.json', (res, estado) => {
  if(estado === 'success') {
    localStorage.setItem("PRODUCTOS", JSON.stringify(res.productos));
  };
});