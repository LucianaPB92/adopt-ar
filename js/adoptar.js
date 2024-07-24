let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
let containerCards = document.querySelector("#container-cards");
let inputSearch = document.querySelector("#search");
console.log(mascotas);

const crearTarjetas = (array) => {
  containerCards.innerHTML = "";

  if (array.length > 0) {
    array.map((mascota) => {
      let col = document.createElement("div");
      col.classList = "col my-3";

      let card = /*HTML */ ` <div class="card">
                <img src=${mascota.imagen} class="card-img-top" alt=${mascota.nombre}>
                <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                <h5 class="card-title">${mascota.nombre}</h5>
                <p class="card-text">${mascota.raza}</p>
                </div>
                <div>
                <a href="https://wa.me/"${mascota.contacto} target="_blank"><img class="img-whatsapp" src="../assets/whatsapp_logo.png" alt="whatsapp" /> </a>
                
                </div>
                </div>
             </div>`;

      col.innerHTML = card;
      containerCards.append(col);
    });
  }
};

const buscarPorEspecie = (event) => {
  event.preventDefault();

  let mascotasEncontradas = mascotas.filter((mascota) =>
    mascota.especie.includes(inputSearch.value.toLowerCase().trim())
  );
  crearTarjetas(mascotasEncontradas);
};

document
  .querySelector("#form-search")
  .addEventListener("submit", buscarPorEspecie);

crearTarjetas(mascotas);
