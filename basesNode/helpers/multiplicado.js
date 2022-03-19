const fs = require("fs");
const colors = require('colors');


const createFile = async( base=5, listar=false, limite=10 ) => {
    
    try {
        
        let consola, documento ="";
        
        
        for (let index = 0; index <= limite; index++) {
            documento += `${base} x ${index}= ${base*index}\n`;
            consola += `${base} x ${index}= ${base*index}\n`.rainbow;
            
        }
        if (listar){

            console.clear();
        
            console.log("=========================".rainbow );
        
            console.log(`   Tabla del ${base} `.rainbow);
        
            console.log("=========================".rainbow);
        
            console.log(consola);

        }
        
        
    
        fs.writeFileSync(`tablas/tabla-${base}.txt`, documento );
    
        return `tabla- ${base}.txt `.rainbow;
        
    } catch (err) {
        throw err;        
    }
    
    
    
    

}

module.exports={createFile};





