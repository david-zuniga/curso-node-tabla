
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5, listar, hasta ) => {

    try {
        let salida = '';

        for (var i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        }
        
        if (listar) {

            console.log('=========================='.green);
            console.log('    Tabla del: ', colors.blue(base));
            console.log('=========================='.green);
    
            console.log(salida);
        }
        
        /* fs.writeFile(`tabla-${base}.txt`, salida, ( err ) => {
            if ( err ) throw err;
        
            console.log(`tabla del ${base} creada`);
        }); */
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla del ${base}`;

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}