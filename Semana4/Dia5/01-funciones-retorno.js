/*
function cuboDeNumero(numero){
    let rpta = numero* numero * numero;
    return rpta;
    console.log("Hola");
}

let resultado = cuboDeNumero(5);
console.log(resultado);*/

/**
 * Nombre a buscar en un arreglo String, retornar  TRUE y FALSE según sea el caso
 * @param {Array<string>} nombres 
 * @param {string} nombreBuscado
 * @returns {boolean} 
 */


function buscarNombre (nombres, nombreBuscado){
    for(let i=0; i < nombres.lenght; i++){
        if(nombres[i]===nombreBuscado){
            return true;
        }
    }
    return false;
}

const nombres =["jorge", "dayana", "paty", "maria", "victor","kyra"];

console.log(buscarNombre(nombres,"maria"));
console.log("maria"+ (buscarNombre(nombres, "maria") ? "SI":"NO") + "EXISTE REGISTROS");


