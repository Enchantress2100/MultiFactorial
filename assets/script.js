//se pide número al usuario
let numero=prompt("Ingrese un número a partir de 1 hasta 20");

//Función para determinar si el número es número, y si está en rango.
function validar() {
    while (numero >20||numero<1||isNaN(numero)) {
    numero=prompt("Elección no válida, por favor reintentar")
    }  
}
 validar()

//Multiplicación
for(i=1;i<=numero;i++){
    let resultadoMulti=numero*i;
    console.log(`${numero} * ${i} = ${resultadoMulti}`)
}

//Factorial
for(let i=1; i<=numero;i++){
    let resultado=1
    for(let j=1; j<=i;j++){
        resultado=resultado*j
    }
    console.log(`el factorial de ${i} es ${resultado}`)
}








