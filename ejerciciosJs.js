// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio

const countTrue = (array, index = 0) => {
    if (index >= array.length) {
        return 0;
    }
    let count = 0;
    if (array[index] == true) {
        count += 1;
    }
    count += countTrue(array, index + 1);
    return count;
};



console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([]));
console.log(countTrue([false, false, false, false, false]));


// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
const mayorComunDivisor = (num1,num2) => {
    if (num2 === 0) {
        return num1;
    } else {
        return mayorComunDivisor(num2, num1 % num2);
    }
}

console.log(mayorComunDivisor(36,24));

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
const fibonacci = (number) => {
    if (number <= 1) {
      return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
  };
  
  console.log(fibonacci(5));

const businessHours = hour => {
    if (hour >= 9 && hour <= 18) {
        return `Horario laboral`;
    } else return `Horario no laboral`;
};

const businessDays = day => {
    if (day < 1 || day > 5) {
        return `Dia no laboral`;
    } else return `Dia laboral`;
};

console.log(businessHours(9));
console.log(businessDays(1));

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)

// (nivel) -> cantidad de numeritos

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%
const countryArea = (name, countryArea) => {
    const earthArea = 148940000;
    let proportion = (countryArea * 100) / earthArea;
    return `${name} ocupa un ${proportion.toFixed(4)}% del area disponible en la tierra.`
}
console.log(countryArea('USA', 9372610));
console.log(countryArea('Russia', 17098242));

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit


// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const messengerBzz = user => {
    switch (user) {
        case 1:
            return `El user ${user} esta conectado en este momento`;
        case 2:
            return `El user ${user-1} y el user ${user} estan conectados en este momento`;
        default:
            if (user > 2) {
                return `El user 1 y ${user -1} más estan conectados en este momento`;
            } else return `Introduce un valor valido`;
    };
};

console.log(messengerBzz(1));
console.log(messengerBzz(2));
console.log(messengerBzz(10));