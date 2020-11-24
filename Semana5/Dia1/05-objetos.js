let objPersona = {
    nombre: "Jorgito",
    direccion: "Calle Viva",
    platosFavoritos: ["Ceviche", "Rocoto Relleno", "Chaufa"],
    objUbicacion: {
        lat: -70.1324,
        lon: -16.5135,
    }
};

//Forma 1: Mostrar atrbutos de un objeto
console.log(objPersona.platosFavoritos);
console.log(`Latitud: ${objPersona.objUbicacion.lat}`);

//Forma 2:
console.log();

objPersona.platosFavoritos.forEach ((plato, i)=>{
    console.log(`Plato ${i+1}: ${plato}`); 
})

//Modificar un atributo en el objeto
objPersona.nombre ="Jorge Luis";
console.log(objPersona);

//Objetos con atrbutos de forma string
const objVehiculo ={
    "marca" : "Mazda",
    "color" : "Cafe",
    "nro-llantas" : 4,
}

console.log(objVehiculo["nro-llantas"]);

969 172 876