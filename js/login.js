const inicializarUsuarios = () => {
  let users = [
    {
      id: 1,
      email: "admin@adopt-ar.com",
      password: "admin12345678",
      rol: "admin",
    },
    {
      id: 2,
      email: "usuario@adopt-ar.com",
      password: "user12345678",
      rol: "user",
    },
  ];

  localStorage.setItem("users", JSON.stringify(users));
};

const logOut = () => {
  localStorage.removeItem("user");
};
logOut();

let correo = document.getElementById("email");
let pass = document.getElementById("password");

//algoritmo Login

//datos de entrada: correo, contraseña
// procesos: validar correo, validar password - comparo los datos y veo si existen en la BD
//resultado: Si existe el usuario ir al home, si no existe devolcer un mensaje.

const logIn = (event) => {
  event.preventDefault();
  //traerme todos los usuarios
  let usuarios = JSON.parse(localStorage.getItem("users")) || [];

  let validarDatos = usuarios.find(
    (usuario) =>
      usuario.email === correo.value && usuario.password === pass.value
  );

  if (validarDatos) {
    console.log(validarDatos);
    let user = {
      id: validarDatos.id,
      email: validarDatos.email,
      rol: validarDatos.rol,
    };

    localStorage.setItem("user", JSON.stringify(user));
    location.assign("/index.html");
  } else {
    alert("Correo o contraseña incorrectos");
  }
};

document.getElementById("formulario").addEventListener("submit", logIn);
