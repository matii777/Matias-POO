function encontrarMayorMenor(array){
    //CREACION DE LAS VARIABLES
    let mayor = array[0];
    let menor = array[0];
    //BUCLE FOR XDDDD
    for(let i = 0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i]
        }
        else if(array[i] < menor){
            menor = array[i]
        }
    }
    return array; 
};
//MOSTRAR EL RESULTADO
let resultado = encontrarMayorMenor([3,5,10]);
alert(resultado);