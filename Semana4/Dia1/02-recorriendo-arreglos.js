/*
let edades =[45,12,24,27];

for(let i=0; i<edades.length; i++){
    console.log(edades[i]);

}



const n = 5;
let nombres = [];
for (let i=0; i<=n;i ++){
    let ingreso = prompt(`Ingrese el usuario ${i+1}`);
    nombres.push(ingreso);
}
console.log(nombres); */

let datosbinarios = [1,1,1,1,1,0,1,1,1,1,1,0];
let x = 0, y=0;

for (let i= 0; i<datosbinarios.length; i++){
    if(datosbinarios[i]==0){
        x++;
    }else {
        y++;
    }
}
if(x>y){
    console.log(`Existen más 0`);
}else if(y>x){
    console.log(`Existen más 1`);
}else{
    console.log(`Tiene la misma cantidad`);
}
console.log(`Cantidad de 0: ${x}`);
console.log(`Cantidad de 1: ${y}`);
console.log(`Cantidad Total: ${datosbinarios.length}`);
