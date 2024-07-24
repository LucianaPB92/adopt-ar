let url = new URL(location.href);
let idMascota = url.searchParams.get("id");

console.log(idMascota);

let mascotas = JSON.parse(localStorage.getItem("mascotas"));

let mascota = mascotas.find((item) => item.id === idMascota);

console.log(mascota);
