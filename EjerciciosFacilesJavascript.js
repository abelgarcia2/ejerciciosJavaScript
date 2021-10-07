/* Ejercicio 1 */
function Producto(precio, nombre) {
  this.precio = precio;
  this.nombre = nombre;

  this.esNegativo = function () {
    return this.precio < 0;
  };

  let miProducto = new Producto(33, 'Lápiz');

  console.log(miProducto.nombre);
  console.log(miProducto.esNegativo);
}

/* Ejercicio 2 */
Number.prototype.esPrimo = function () {
  for (let i = 2; i < this; i++) {
    if (this % 1 === 0) {
      return false;
    }
  }
  return this !== 1;
};

let numero = 10;
console.log(numero.esPrimo());

/*Ejercicio 3 */
function miFuncion(algo) {
  if (algo.typeof(Number)) {
    return algo * 2;
  } else if (algo.typeof(String)) {
    return algo[0];
  } else if (algo.typeof(Boolean)) {
    if (algo === true) return 'YES';
    else return 'NO';

    return algo == true ? 'YES' : 'NO';
  }

  return 'ERROR';
}
console.log(miFuncion(33));

/* Ejercicio 4 */
let nums = [6, 3, 55, -1, 7, 8, 9, 34, 2];
let mayores10 = nums.filter((i) => i > 10);
console.log(mayores10);

/* Ejercicio 5 */
let nums = [6, 3, 55, -1, 7, 8, 9, 34, 2];
let subArray = nums.slice(4, 8);
console.log(subArray);

/* Ejercicio 6 */
let nums = [6, 3, 55, -1, 7, 8, 9, 34, 2];
console.log(nums[nums.length - 1]);
console.log(nums[0]);
console.log([nums[0], nums[nums.length - 1]]);

/* Ejercicio 7 */
let nums = [6, 3, 55, -1, 7, 8, 9, 34, 2];
nums.pop();
nums.shift();
console.log(nums);

/* Ejercicio 8 */
let nums = [6, 3, 55, -1, 7, 8, 9, 34, 2];
nums.splice(3, 3, 0, 0, 0);
console.log(nums);

/* Ejercicio 9 */
var arr = [
  [true, false, true],
  'Jose',
  {
    nombre: 'Manzana',
    precio: {
      iva: 5.6,
      sinIva: 2.6,
    },
  },
  true,
  function () {
    return 'Hola mundo';
  },
  function (nombre) {
    return 'Hola ' + nombre;
  },
  [4, 5, 6],
];
console.log(arr);
console.log(arr[5]('Pepe'));
console.log(arr[0].length);
console.log(arr[2].precio.iva);
console.log(arr[arr.length - 1].map((i) => i * 2));

/* Ejercicio 10 */
const myset = new Set();
myset.add('Pepe');
myset.add('Ángel');
myset.add('Bea');
console.log(myset);
console.log(myset.has('Félix'));
myset.delete('Ángel');
myset.add('Ana');
console.log(myset);

/* Ejercicio 11 */
fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .then((json) => {
    console.log(json.results[0].name.first, json.results[0].name.last);
    console.log(json.results[0].email);
    console.log(json.results[0].location.street.name);
  });
