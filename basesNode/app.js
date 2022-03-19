const {createFile} = require("./helpers/multiplicado");

const argv = require('./config/yargs')


console.clear();





// const [, , arg3="base=5"] = process.argv;
// const [ , base] = arg3.split('=');


//console.log(base);


createFile(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(`${nombreArchivo} creado`)).catch(err => console.error(err));

    
