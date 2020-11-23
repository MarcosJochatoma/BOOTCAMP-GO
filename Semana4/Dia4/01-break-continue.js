/**Ubicar la posición de Dennis que no se repite */

/*
let nombres =["Jorge", "Dayanna","Pedro", "Pepito", "Dennis"];

let i=0
for (let i=0; i<nombres.length; i++){
    if(nombres[i]=="Dennis"){
        console.log(`Posición de Dennis= ${i}`);
        break;
    }
}*/

let numerosbinarios = [0,1,0,1,0,0,0,1,0,1,1,1,1,0];

for(let i =0 ; i<numerosbinarios.length; i++){
    if(numerosbinarios[i]==1){
        continue;
    }
    console.log(numerosbinarios[i]);
}


