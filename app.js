
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
require('colors');


console.clear();
//const base = 3;

console.log(argv);

/* const [ , , ar3 = 'base=5'] = process.argv;
const [, base ] = ar3.split('='); */


crearArchivo( argv.b, argv.l, argv.h )
    .then( archivo => console.log(archivo.rainbow, 'creado'))
    .catch( err => console.log(err));

