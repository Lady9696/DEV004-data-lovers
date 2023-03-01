import {
  sortCharactersAscendente,
  filtarCasas,
  filtarPowerFemale,
  buscadorPersonajes,
  filtroPatronus,
  buscadorPatronus,
} from "../src/data.js";

// filtro de orden alfabetico
describe("sortCharactersAscendente", () => {
  const data1 = [
    {
      id: 267,
      name: "Draco Malfoy",
    },
    {
      id: 268,
      name: "Lucius Malfoy",
    },
    {
      id: 285,
      name: "Alastor Moody",
    },
    {
      id: 303,
      name: "Garrick Ollivander",
    },
    {
      id: 312,
      name: "Peter Pettigrew",
    },
  ];
  const result1 = [
    {
      id: 285,
      name: "Alastor Moody",
    },
    {
      id: 267,
      name: "Draco Malfoy",
    },
    {
      id: 303,
      name: "Garrick Ollivander",
    },
    {
      id: 268,
      name: "Lucius Malfoy",
    },
    {
      id: 312,
      name: "Peter Pettigrew",
    },
  ];
  it("is a function", () => {
    expect(typeof sortCharactersAscendente).toBe("function");
  });

  it("returns `sortCharactersAscendente`", () => {
    expect(sortCharactersAscendente(data1, "Alastor Moody")).toStrictEqual(
      result1
    );
  });
  test("sin argumento", () => {
    // expect(filtarCasas(data, "")).toBe(false)
    expect(sortCharactersAscendente(data1, "")).toBeTruthy();
  });
});

//Filtro de casas
describe("filtarCasas", () => {
  const data = [
    {
      id: 267,
      name: "Draco Malfoy",
      house: "Slytherin",
    },
    {
      id: 268,
      name: "Lucius Malfoy",
      house: "Slytherin",
    },
    {
      id: 285,
      name: "Alastor Moody",
      house: "Unknown",
    },
    {
      id: 303,
      name: "Garrick Ollivander",
      house: "Revenclaw",
    },
    {
      id: 312,
      name: "Peter Pettigrew",
      house: "Gryffindor",
    },
  ];
  const result = [
    {
      id: 303,
      name: "Garrick Ollivander",
      house: "Revenclaw",
    },
  ];
  it("is a function", () => {
    expect(typeof filtarCasas).toBe("function");
  });

  it("returns `filtarCasas`", () => {
    expect(filtarCasas(data, "Revenclaw")).toStrictEqual(result);
  });
  test("sin argumento", () => {
    // expect(filtarCasas(data, "")).toBe(false)
    expect(filtarCasas(data, "")).toBeFalsy();
  });
});

//Filtro genero y poder
describe("filtarPowerFemale", () => {
  const data2 = [
    {
      id: 644,
      name: "Minerva McGonagall",
      gender: "Female",
      power: 85,
    },
    {
      id: 350,
      name: "Tom Riddle (Voldemort)",
      gender: "Male",
      power: 95,
    },
    {
      id: 587,
      name: "Hermione Granger",
      gender: "Female",
      power: 87,
    },
    {
      id: 622,
      name: "Bellatrix Lestrange",
      gender: "Female",
      power: 86,
    },
    {
      id: 50,
      name: "Sirius Black",
      gender: "Male",
      power: 89,
    },
    {
      id: 559,
      name: "Petunia Dursley",
      gender: "Female",
      power: 0,
    },
  ];
  const result2 = [
    { id: 587, name: "Hermione Granger", gender: "Female", power: 87 },
    { id: 622, name: "Bellatrix Lestrange", gender: "Female", power: 86 },
    { id: 644, name: "Minerva McGonagall", gender: "Female", power: 85 },
  ];
  it("returns `filtarPowerFemale`", () => {
    // console.log(filtarPowerFemale(data2, "Female"));
    expect(filtarPowerFemale(data2, "Female")).toStrictEqual(result2);
  });

  test("sin argumento", () => {
    // expect(filtarCasas(data, "")).toBe(false)
    expect(filtarPowerFemale(data2, "")).toBeFalsy();
  });
});

//buscador personajes del index
describe("buscadorPersonajes", () => {
  const data = [
    {
      id: 267,
      name: "Draco Malfoy",
      house: "Slytherin",
    },
    {
      id: 268,
      name: "Lucius Malfoy",
      house: "Slytherin",
    },
    {
      id: 285,
      name: "Alastor Moody",
      house: "Unknown",
    },
    {
      id: 303,
      name: "Garrick Ollivander",
      house: "Revenclaw",
    },
    {
      id: 312,
      name: "Peter Pettigrew",
      house: "Gryffindor",
    },
  ];
  const result3 = [
    {
      id: 267,
      name: "Draco Malfoy",
      house: "Slytherin",
    },
  ];

  it("is a function", () => {
    expect(typeof buscadorPersonajes).toBe("function");
  });

  it("returns `buscadorPersonajes`", () => {
    expect(buscadorPersonajes(data, "Draco Malfoy")).toStrictEqual(result3);
  });
  test("sin argumento", () => {
    expect(buscadorPersonajes(data, "")).toBeFalsy();
  });
});

//filtro menu patronus
describe("filtroPatronus", () => {
  const data1 = [
    {
      id: 50,
      name: "Sirius Black",
      patronus: "Hare",
    },
    {
      id: 326,
      name: "Harry Potter",
      patronus: "Stag",
    },
    {
      id: 258,
      name: "Remus Lupin",
      patronus: "Wolf",
    },
    {
      id: 469,
      name: "Arthur Weasley",
      patronus: "Weasel",
    },
    {
      id: 476,
      name: "Ronald Weasley",
      patronus: "Jack Russell terrier",
    },
  ];

  const result1 = [
    {
      id: 469,
      name: "Arthur Weasley",
      patronus: "Weasel",
    },
    {
      id: 326,
      name: "Harry Potter",
      patronus: "Stag",
    },
    {
      id: 258,
      name: "Remus Lupin",
      patronus: "Wolf",
    },
    {
      id: 476,
      name: "Ronald Weasley",
      patronus: "Jack Russell terrier",
    },
    {
      id: 50,
      name: "Sirius Black",
      patronus: "Hare",
    },
  ];
  //Fitro patronus
  it("is a function", () => {
    expect(typeof filtroPatronus).toBe("function");
    //console.log(typeof filtroPatronus);
  });

  it("returns `filtroPatronus`", () => {
    expect(filtroPatronus(data1, "Arthur Weasley")).toStrictEqual(result1);
  });
  test("sin argumento", () => {
    expect(filtroPatronus(data1, "")).toBeTruthy();
  });
});

//buscador patronus
describe("buscadorPatronus", () => {
  const data1 = [
    {
      id: 50,
      name: "Sirius Black",
      patronus: "Hare",
    },
    {
      id: 326,
      name: "Harry Potter",
      patronus: "Stag",
    },

    {
      id: 258,
      name: "Remus Lupin",
      patronus: "Wolf",
    },

    {
      id: 469,
      name: "Arthur Weasley",
      patronus: "Weasel",
    },
    {
      id: 476,
      name: "Ronald Weasley",
      patronus: "Jack Russell terrier",
    },
  ];

  const result2 = [
    {
      id: 50,
      name: "Sirius Black",
      patronus: "Hare",
    },
  ];

  it("is a function", () => {
    expect(typeof buscadorPatronus).toBe("function");
  });

  it("returns `buscadorPatronus`", () => {
    expect(buscadorPatronus(data1, "Sirius Black")).toStrictEqual(result2);
  });
  test("sin argumento", () => {
    expect(buscadorPatronus(data1, "")).toBeFalsy();
  });
});

// npx jest --watch
