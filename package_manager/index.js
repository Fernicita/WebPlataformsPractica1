const lo4js = require('log4js');
const logger = lo4js.getLogger('package_manager');
logger.level = 'info';
logger.debug('Iniciando aplicación en modo de pruebas');
logger.info("La app ha iniciado correctamente 2 ");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo acceder al sistema de archivos");
logger.fatal("Aplicacion no se pudo ejectuar en el so");

//let Hola_lint=0; para que nos muestre un error en la terminal
function sumar(x,y){
    return x+y;
    //return 55;

}

module.exports=sumar;
