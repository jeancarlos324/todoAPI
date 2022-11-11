dataApi = [
  { name: "hola", edad: 18 },
  { name: "jhon", edad: 20 },
  { name: "pedro", edad: 10 },
  { name: "maria", edad: 10 },
  { name: "juancho", edad: 10 },
];

dataBase = [
  { name: "hola", edad: 18 },
  { name: "pedro", edad: 20 },
];

function filterData(dataApi, dataBase) {
  let arrayFilter = [];
  const newArrayString = dataBase.map((data) => JSON.stringify(data));
  console.log(newArrayString);

  for (daA of dataApi) {
    if (!newArrayString.includes(JSON.stringify(daA))) {
      arrayFilter.push(daA);
    }
  }
  return arrayFilter;
}

console.log(filterData(dataApi, dataBase));
