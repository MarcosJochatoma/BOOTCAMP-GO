const usuarios = ["Daniela", "Dayana", "Mariel", "Kike", "Rubi"]

const nuevosUsuarios = usuarios.map((usuario) =>{
    return usuario;
})

console.log(nuevosUsuarios);



const numeros = [15,12,23,67,1,154,87];
const resultados = numeros.map ((numero)=>{
    if(numero%2===0){
        return numero*2;
    }else{
        return numero/2;
    }
})

console.log(resultados);


const dobledepares = numeros.map ((numero)=>{
    if(numero%2===0){
        return numero*2;
    }
})

console.log(dobledepares);
