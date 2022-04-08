console.log("Hola Mundo!")

const Calculadora = {
    suma: function (a,b){
        return a + b
    },
    resta: function (a,b){
        return a - b
    },
    multiplicacion: function (a, b){
        return a * b
    }, 
    division: function (a, b){ 
        if(b === 0){
            return 'Error'
        }
        return a / b
    },
    sumatoria: function (arr){
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    },
    sumatoria2: function (arr1, arr2){
        let sum = 0
        if(arr1.length === arr2.length){
            for (let i = 0; i < arr1.length; i++){
                sum += (arr1[i] + arr2[i])
            }
        }
        return sum
    }
}

console.log("Calculadora Obj ::", Calculadora)

// Pruebas de nuestra funcion calculadora
console.log("Suma   1 + 1 = ", Calculadora.suma(1, 1))
console.log("Resta  1 - 1 = ", Calculadora.resta(1, 1))
console.log("Multi  1 * 2 = ", Calculadora.multiplicacion(1, 2))
console.log("Divi   1 / 1 = ", Calculadora.division(1, 1))
console.log("Sumatoria: ",     Calculadora.sumatoria([1, 1, 1]))
console.log("Sumatoria2: ",    Calculadora.sumatoria2([1, 1, 1], [2, 1, 1]))