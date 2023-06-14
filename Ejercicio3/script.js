

function soloNumeros(array) {
    let nuevoArray =[];

    for (i = 0; i < array.length; i++) {
        if(Number.isInteger(array[i])) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

let array = [4,"dos",8,"tres",5,9,1,"cero"];

alert(soloNumeros(array));