import validator from './validator.js';
//Aquì llamo al boton del index
//tambièn al valor del numero que ingresa en usurio en mi caja de texto
const btnValidar = document.getElementById("btn-validar")
//cuando haga clic ejecutar ese evento
btnValidar.addEventListener("click", function () {
  // en numUsuario se va a asignar el nùmero de la tarjeta de crèdito
  const numero = document.getElementById("numero").value;
  //const result = document.getElementById("result");
  if (numero === "") {
    alert("el campo no puede estar vacio");
  }
  // console.log(numero);
  //se esta invocando la funciòn isValid
  // para llamar al objeto validator del documento validator.js
  const valid = validator.isValid(numero)
  if (valid) {
    alert("Tarjeta vàlida");
  }
  else {
    alert("Tarjeta invàlida");
  }
})
btnValidar.addEventListener("click", () => {
  const numero = document.getElementById("numero").value
  //console.log(validator.maskify(numero));
  //alert((validator.maskify(numero)));
  alert("el numero que ingresaste es:" + validator.maskify(numero));
})
//console.log(validator);
