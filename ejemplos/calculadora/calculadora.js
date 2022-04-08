let operacion = 'suma'

const cambioOp = function (op){
    operacion = op
}

// t=i
const igual = function (){
    
    // t= 0 + i
    const a = parseFloat(document.querySelector("#a").value)
    const b = parseFloat(document.querySelector("#b").value)

    // Si def una variable 
    // t= i + 1
    console.log(operacion)
    const resultado = Calculadora[operacion](a,b)
    document.querySelector("#resultado").innerHTML = resultado
}