class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  };
};

const togglePedidos = (id) => {
  const e = document.querySelector(id);
  if(e.style.display == 'none') {
    e.style.display = 'flex';
  } else {
    e.style.display = 'none';
  };
};