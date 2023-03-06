import data from "./data/harrypotter/data.js"; // se debe colocar todas las inteacciones con el dom
import {
  sortCharactersAscendente,
  filtarCasas,
  filtarPowerFemale,
  buscadorPersonajes,
  obtenerTextoDinamico,
} from "./data.js";

// funcion para crear la estrucutra de los personajes
function dibujarPersonajes(personajes) {
  //Se selecciona el elemento container del dom y se lo trae al js para trbajar con el
  const container = document.getElementById("container");
  container.innerHTML = ""; //para limpiar la copia de los personajes y se filtren de forma correcta
  // bucle sobre cada personaje
  personajes.forEach((personaje) => {
    //createlement crea un elemeno html esptecificandolo por el tag name, en este caso article,
    //El elemento nuevo serà tarjeta
    const card = document.createElement("article"); //createelement es para crear elementos en el dom osea el articulo
    const picture = document.createElement("img");
    const front = document.createElement("div");
    const back = document.createElement("div");
    // con setAtribut y class list se puede asignar class o id
    picture.setAttribute("src", `${personaje.img}`);
    picture.setAttribute("id", "imagenp");
    card.setAttribute("class", "card");
    front.setAttribute("class", "cara front");
    back.setAttribute("class", "cara back");

    //nos devulve el elemento descendiente para el texto de nuestro articulo, osea tarjetas.
    front.innerHTML += `<p id="nombre">${personaje.name}</p><p id="house">House:<br>${personaje.house}`;
    back.innerHTML += `<div id="atras"><img class="logo" src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png" alt="Logo">
     <p>${personaje.name}</p><br><p >Birth: ${personaje.birth}</p ><br><p>Specie: ${personaje.species}</p><br><p >wand: ${personaje.wand}</p> <br> <p >Power: ${personaje.power}%</p></div>`;

    //Esto sirve para agregar el nodo, es decir agrgar un elemento dentro de otro.
    container.appendChild(card);
    card.appendChild(front);
    front.appendChild(picture);
    card.appendChild(back);
    //console.log(personajes);
  });
}
dibujarPersonajes(data.characters);

//2da Historia filtros alfabeticos, se trae la info de los selectores y luego del data para hacer los filtros
const selectores = document.getElementById("alphabetical");
selectores.addEventListener("change", () => {
  //llamamos al change para lea cuando el usurio cambia de opcion en el selector del dom
  const opciones = selectores.value; //obtenemos el valor del select
  const newDataOrder = sortCharactersAscendente(data.characters);
  //console.log(sortCharactersAscendente(data.characters));
  if (opciones == "ascendente") {
    dibujarPersonajes(newDataOrder);
  } else if (opciones == "descendente") {
    dibujarPersonajes(newDataOrder.reverse());
  } else {
    dibujarPersonajes(data.characters); //funcion principal del llamado a los personajes establecida en Linea 5 del main.
  }
});

//3ra historia filtros casas
const selectores2 = document.getElementById("casas");
selectores2.addEventListener("change", (e) => {
  const casita = e.target.value; //evento dinamico para obtener el valor del select
  const arrCasas = filtarCasas(data.characters, casita);
  dibujarPersonajes(arrCasas);
  if (casita === "all Houses") {
    dibujarPersonajes(data.characters); //re utilizamos la funcion del llamado a los personajes
  }
  //console.log(arrCasas);
});

//4ta Historia filtros por POWER Y GENDER
const selectores3 = document.getElementById("gender");
selectores3.addEventListener("change", (e) => {
  const gender = e.target.value; //evento dinamico para obtener el valor del select
  const arrGender = filtarPowerFemale(data.characters, gender);
  dibujarPersonajes(arrGender);
  //este if nos ayuda a que cuando se seleccione all characters en la interfaz se dibujen los personajes desaparezcan
  if (gender === "all characters") {
    dibujarPersonajes(data.characters);
  }

  //textodinamico para el 4to filtro
  const resultado = document.getElementById("resultados");
  const textoDiamico = obtenerTextoDinamico(gender, arrGender.length);
  resultado.textContent = textoDiamico; //resultado viene del id resultado del html
  //este if nos ayuda a que cuando se seleccione all characters en la interfaz se queden los personajes y no desaparezcan
  if (gender === "all characters") {
    {
      resultado.innerHTML = "";
    }
  }
});

//buscador personajes
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  const buscarIndex = document.getElementById("buscarIndex").value;
  //console.log(buscarIndex);
  const arrBuscador = buscadorPersonajes(data.characters, buscarIndex);
  dibujarPersonajes(arrBuscador);
});

//boton reiniciar en el menu
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", () => {
  alphabetical.value = "all Characters"; //se coloca como default "all xx" para que el boton reinicie y dibuje los personajes en la interfaz
  casas.value = "all Houses";
  gender.value = "all characters";
  resultados.innerHTML = "";
  buscarIndex.value = "";
  dibujarPersonajes(data.characters);
});

//para no refrescar la pagina, hicimos un formulario para que en la misma URL se haga el refresh y no se pierda la conectividad
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  //console.log(e);
  e.preventDefault();
});
