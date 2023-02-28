import { data2 } from "./data/harrypotter/patronus.js"; //data de los patronus de los personajes
import { filtroPatronus, buscadorPatronus } from "./data.js";
const container1 = document.getElementById("container1");
function dibujarPatronus(personajes1) {
    if (!container1) {

        return
    }
    container1.innerHTML = "";

    personajes1.forEach((personaje1) => {
       

        //createlement crea un elemeno html esptecificandolo por el tag name, en este caso article, 
        //El elemento nuevo serà tarjeta
        const card1 = document.createElement("article");

        //createelement es para crear elementos en el dom estamos creando el articulo
        const picture1 = document.createElement("img");
        const front1 = document.createElement("div");
        const back1 = document.createElement("div");
        const picture2 = document.createElement("img");

        picture1.setAttribute("src", `${personaje1.img}`);
        picture2.setAttribute("src", `${personaje1.img2}`);
        picture1.setAttribute("id", "imagenpersona");
        picture2.setAttribute("id", "imagenPatronus");
        card1.setAttribute("class", "card1");
        front1.setAttribute("class", "cara front");
        back1.setAttribute("class", "cara back");

        //es elemento de la imagen         
        //nota: Se puede crear elementos desde js en el dom y y llenar esos elementos con texto
        front1.innerHTML += `<p id="nombre">${personaje1.name}</p><div id = "textoAtras" <p> Patronus </p></div>`
        back1.innerHTML += `<div id="atras1" <p> ${personaje1.description}</p> </div> `;

        //para agregar alces o id set atributte o class list
        //el inner se usa para aggrerar texto al article que se nombrò tarjeta
        //tarjeta.innerHTMl=tarjeta.innerHTMl+tarjeta.innerHTMl
        // se usa para pasar por todos los characters
        //Esto sirve para agregar el nodo, es decir el articulo
        container1.appendChild(card1);
        card1.appendChild(front1);
        card1.appendChild(back1);
        front1.appendChild(picture1);
        back1.appendChild(picture2);




        //appendchild es el hijo de create element
        //console.log(personajes1);
    })
}
console.log(dibujarPatronus);
dibujarPatronus(data2.characters1);

//filtropatronus de forma alfabetica
const selPatronus = document.getElementById("ordenPatronus");
if (selPatronus) {

    selPatronus.addEventListener("change", () => {
        const opciones = selPatronus.value;
        const newDataOrder = (filtroPatronus(data2.characters1));
        console.log(filtroPatronus(data2.characters1));
        if (opciones == "ascendente1") {
            dibujarPatronus(newDataOrder);
        } else if (opciones == "descendente1") {
            dibujarPatronus(newDataOrder.reverse());
        } else {

            dibujarPatronus(data2.characters1); //funcion principal del llamado a los personajes
        }
        console.log(dibujarPatronus(newDataOrder));
    })

}
//Buscador patronus
//1 me traigo el buscador
const boton = document.getElementById("boton");
if (boton) {

    //2 agrego el evento keyUp para que cuando el usuario presione el teclado se ejecute el evento de buscar
    boton.addEventListener("click", () => {
        const buscar = document.getElementById("buscar").value;
        console.log(buscar);
        const arrBuscador = buscadorPatronus(data2.characters1, buscar);
        dibujarPatronus(arrBuscador);
        //evento dinamico para obtener el valor del input del usuario
    })

}

