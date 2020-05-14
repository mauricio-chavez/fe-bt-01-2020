const objeto = { nombre: 'Mauricio', apellido: 'Chávez' };

Object.keys(objeto); // ['nombre', 'apellido']

for (const key in objeto) {
  console.log(objeto[key]);
}
