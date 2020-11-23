const miFuncion = (callback) => {
    callback();

}

miFuncion(() => {
    console.log("Holaaaaa");
});


/**
 * 
 * @param {function (string) {
     
 }} respuesta 
 */


const traerDatos = (respuesta) => { 
    fetch("https://reqres.in/api/users?page=2").then(data => { return data.json();
 }).then(rpta => { setTimeout(() => { respuesta(rpta); 
}, 2000);
 }) }



traerDatos ((rpta) =>{
    console.log(rpta);

});