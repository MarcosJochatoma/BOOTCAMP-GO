/**
 * 
 */

let dsto = 0;
let productos = [12.5, 30, 15, 2.45, 900, 450];
let total=0;

for(let i=0; i< productos.length; i++){
        total += productos[i];
}

if(total>500){
    dsto = total*0.05;
}else{
    dsto = total*0.01;
}

dscto = total > 500 ? total * 0.05 : total* 0.01
console.log(dsto);




