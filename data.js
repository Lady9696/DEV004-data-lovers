 //filtro 2da historia orden alfabetico
 const sortCharactersAscendente = (characters) => { 
  if(characters === ''){ //linea 8 a 10 para usar en el test sin argumento
    return false
  }

  //con esta función sort nos ordena el array y lo devuelve ordenado 
  const dataorder = characters.sort((a, b) => {
    
    if (a.name < b.name) {//orden alfabetico de A-Z
      return -1;
    }
    if (a.name > b.name) {//orden al de Z-A
      return 1;
    }
    return 0;
  });
  return dataorder;
};

// filtro 3era historia orden por casa de Hogwarts
 function filtarCasas(characters, casa) { 
  if(casa === ''){ //linea 21 a 23 para usar en el test sin argumento
    return false    
  }
  // se filtra la información del objeto data trayendo solo los value casas
  const filtro = characters.filter(item => item.house === casa); 
  return filtro; //nos devuelve el array de los filtros
}

// filtro 4ta historia orden por poder y genero Witches (Female) Wizards (Male)
 function filtarPowerFemale(characters, gender) { 
  if(gender === ''){ //linea 34 a 36 para usar en el test sin argumento
    return false
  }
  const filtro1 = characters.filter(item => item.gender === gender && item.power >= 20); 
  filtro1.sort((a, b) => b.power - a.power); //se ordena desde el B para que sea del mayor al menor
  return filtro1; //nos devuelve el array de los filtros
  
}

//texto dinamico, se crea funcion para actualizar el html con el filtro gender y llamarla
 function obtenerTextoDinamico(gender, cantidad) {   
 return cantidad +" " + gender +" "+ "characters were found, from the most powerful to the least one.";
}

//buscador personajes index
 function buscadorPersonajes (characters, buscarIndex){
  if(buscarIndex === ''){ //linea 44 a 46 para usar en el test sin argumento
    return false
  }
  //lo que escriba el usuario en el html se filtra y se tranforma de mayuscula/minuscula para ser leido 
  const search = characters.filter(item =>(item.name.toLowerCase().includes(buscarIndex.toLowerCase()))) 
  return search;
}

//filtro patronus pagina html menupatronus
 const filtroPatronus = (characters1) => { //filtro alfabetico Patronus
  if(characters1 === ''){ //linea 53 a 55 para usar en el test sin argumento
    return false
  }
  const dataorder = characters1.sort((a, b) => { //se usa sort el cual nos lee el array y lo devuelve ordenado
    if (a.name < b.name) { //A-Z
      return -1;
    }
    if (a.name > b.name) {//Z-A 
      return 1;
    }
    return 0;
  });
  return dataorder;
};

//buscador en html menupatronus
 const  buscadorPatronus =(characters1, buscar)=>{
  if(buscar === ''){ //linea 69 a 71 para usar en el test sin argumento
    return false
  }
  //lo que escriba el usuario en el html se filtra y se tranforma de mayuscula/minuscula para ser leido 
  const search = characters1.filter(item =>(item.name.toLowerCase().includes(buscar.toLowerCase()))) //input del htnl
  return search;
}

export {//con esto exportamos las funciones a nuestro test 
  buscadorPatronus,
  filtroPatronus,
  buscadorPersonajes,
  obtenerTextoDinamico,
  sortCharactersAscendente,
  filtarCasas,
  filtarPowerFemale,  
}

