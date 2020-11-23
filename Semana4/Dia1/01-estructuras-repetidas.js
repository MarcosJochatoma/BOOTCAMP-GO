/*for(let i=1; i<100; i=i+2){
*    console.log(`Valor de i= ${i}`);
}

for(let i=0; i<100; i=i+5){
    console.log(`Valor de i= ${i}`);
}

for(let i=0; i<100; i++){
    if(i%5==0)
    console.log(`Valor de i= ${i}`);
}

let x=0
for(let i=0; i<20; i++){
    x=x+i;
}
console.log(`Valor de i= ${x}`);

let a=9;
let b=4;
suma=0;
for(let i=0; i<4; i++){
    suma+=a
}
console.log(`Valor de i= ${suma}`);

let i=0
while (i<=30){
    if(i%10==0)
    console.log(`Multiplo de 10= ${i}`);
    i++
}
*/
let suma =0;
let nota=0;
let i=0;
while(nota!=-1){
    nota = +prompt("Ingrese una nueva nota o ingrese -1 para terminar");
    if(nota!=-1){
        suma+=nota;
        i++
    }
        
}
console.log(`La suma es = ${suma}`);
console.log(`El promedio es = ${suma/i}`);


