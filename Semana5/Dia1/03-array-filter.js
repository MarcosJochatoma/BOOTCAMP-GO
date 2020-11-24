const numeros = [15,12,23,67,1,154,87];
const posicionesImpares = numeros.filter ((elemento, i)=>{
    if(i%2!==0){
        return elemento; 

    }
})

console.log(posicionesImpares);