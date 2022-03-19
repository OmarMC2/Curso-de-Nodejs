const { number, options } = require('yargs');

const argv = require('yargs')
.option('b', {
    alias:'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar.'
})
.check((argv, options) => {
    if (isNaN(argv.b)){
    
    throw "La base debe ser un número.";
    }
    return true;
})
.option('l', {
    alias:'list',
    type:'boolean',
    default: false,
    describe: 'Muestra en pantalla la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Es el tamaño o el número hasta el que se va a multiplicar la base.'
})
.check((argv, options) =>{
    if (isNaN(argv.h)){
    
        throw "El límite debe ser un número.";
        }
        return true;
})
.argv;


module.exports = argv;
