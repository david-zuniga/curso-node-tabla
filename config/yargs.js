

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.check( (argv, options ) => {
    if ( isNaN( argv.b )) {
        throw 'La base debe de ser numérica'
    }

    return true;
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla en la consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'limite de multiplicación'
})
.argv;

module.exports = argv;