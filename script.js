const numeros = [10, 17, 8, 23, 56, 92, 33, 70, 19, 5, 61, 88, 12, 99, 27, 39, 53, 2, 77, 50, 3, 67, 29, 14, 72, 6, 91, 46, 10, 81, 38, 60, 22, 49, 1, 69, 25, 9, 75, 41, 18, 87, 35, 68, 13, 64, 30, 7, 48, 26, 84, 55, 31, 4, 80, 21, 73, 34, 58, 15, 71, 59, 11, 45, 20, 76, 37, 65, 24, 90, 51, 28, 78, 43, 16, 82, 32, 66, 36, 74, 47, 63, 40, 85, 52, 89, 54, 86, 57, 44, 83, 62, 94, 95, 98, 100, 96, 97];

/*const pares = numeros.filter((valor, indice)=> {
    if(valor%2 ===0){
        return console.log(`${indice} => ${valor}`);
    }
})*/

/*const impares = numeros.filter((valor, indice)=>{
    if(valor%2 === 1){
        return console.log(`Indice: ${indice} => ${valor}`);
    }
})*/
const somaTotal = numeros.reduce((ac, valor) => {
    return ac += valor;
}, 0);

console.log();
console.log(somaTotal);