// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante

// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

const secretSociety = array => {
        let secretName = [];
        array.forEach(element => {
        secretName.push(element.charAt(0));
    });

    sortedArray = secretName.sort()
    return sortedArray.join('') ;
};

console.log(secretSociety(["Felipe", "Fer", "Zabdiel"]));
console.log(secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));

const onlineStatus = array => {
    
    let aditionalUsers = 0;
    let newArray = [];
    if (array.length > 1) {
        for (let index = 0; index < array.length; index++) {
            if (index > 1) {
                aditionalUsers += 1;
            } else{
                newArray.push(array[index]);
            }
        };
    } else return `No hay usuarios conectados en este momento`;

    return `Los usuarios ${newArray[0]}, ${newArray[1]} y ${aditionalUsers} más estan conectados en este momento`;
};

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer','SatanicSurfer']));
console.log(onlineStatus([]));

// 'mockIng99, J0eyPunch and one 1 more online'
// Dado un arrayonlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']);, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

const arrayMultiplos = (num1, num2) => {
    let array = [];
    for (let index = 0; index < num2; index++) {
        let multiplos = num1 * (index +1);
        array.push(multiplos);
    }

    return array;
}

console.log(arrayMultiplos(2, 10)); //-> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6)); //-> [17, 34, 51, 68, 85, 102]

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const positiveDom = array => {
    let positive = 0;
    let negative = 0;
    array.forEach(element => {
        if (element > 0) {
            positive += 1;
        } else negative += 1;
    });

    if (positive > negative) {
        return `Array dominante positivo`;        
    } else return `Array dominante negativo`;
}

console.log(positiveDom([-1, -3, -5, 4, 6767])); 
// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

