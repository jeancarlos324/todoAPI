const { text } = require("express");
const e = require("express");

const objectA = {
  id: 1,
  name: "jose",
  first_name: "jose",
  last_name: "Perez",
  address: "jr.jose",
  price: "123",
  status: true,
  isAvailable: false,
};

const objectB = {
  name: "",
  first_name: "",
  address: "",
  price: "",
  status: false,
};

const newObject = {
  name: objectA.name,
  first_name: objectA.first_name,
  address: objectA.address,
  price: objectA.price,
  status: objectA.status,
};

const keyObjectB = Object.keys(objectB);
const newArray = keyObjectB.map((key) => [key, objectA[key]]);
const newObject2 = Object.fromEntries(newArray);

// console.log(newObject);
// console.log(keyObjectB);
console.log(newObject2);

const [form, setForm] = useState({});

const handleChangeForm = ({ target }, textField) => {
  const { value } = target;
  setForm({ ...form, [textField]: value });
};

// onChange((event) => {
//   handleChangeForm(event, name);
// });
