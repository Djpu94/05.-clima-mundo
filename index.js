const argv = require('./config/yargs').argv
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async( direccion ) => {
    
    try{
        const coords    = await lugar.getLugarLatLng(argv.direccion);
        const temp      = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch(e){
        return `no de pudo determinar el clima de ${direccion}`;
    } 

} 

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)


  