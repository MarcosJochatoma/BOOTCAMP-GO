/*
let anio = 1991;
if (anio % 400 === 0) {
  console.log("SI ES BISIESTO");
} else {
  if (anio % 4 === 0) {
    if (anio % 100 !== 0) {
      console.log("SI ES BISIESTO");
    } else {
      console.log("NO ES BISIESTO");
    }
  } else {
    console.log("NO ES BISIESTO");
  }
}

*/

let anio = 1991;
if ((anio % 400 === 0) || ((anio % 4 === 0) && (anio % 100 !== 0))) {
  console.log("SI ES BISIESTO");
} else {
  console.log("NO ES BISIESTO");
}
