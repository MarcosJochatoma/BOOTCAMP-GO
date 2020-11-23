const saludar = function () {
    console.log("Hola");
}

const mayor = function (a,b){
    return a > b ? a: b;
}

console.log(mayor(50, 100));

console.log( mayor (mayor(mayor(11,2), mayor(3,4)), 5));