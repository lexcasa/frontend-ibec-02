const Calculadora = Vue.component('calculadora-component', {
    data: function (){
        return {
            operacion: 'suma',
            a: null,
            b: null,
            resultado: null
        }
      },
      methods: {
          igual: function (){
      
              // t= 0 + i
              const a = parseFloat(this.a)
              const b = parseFloat(this.b)
          
              // Si def una variable 
              // t= i + 1
              console.log(this.operacion)
              const resultado = this.Calculadora(this.operacion, a,b)
              this.resultado = resultado
          },
          cambioOp: function (op){
              this.operacion = op
              console.log("operacion :: ", this.operacion)
          },
          Calculadora: function (operacion, a, b){
              return this[operacion](a,b)
          },
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
    },
    template: `
        <div id="calculadora-component">
            <h2>Calculadora</h2>
            <hr>
            <form>
                <input type="number" name="a" v-model="a">
                <br>
                <input type="number" name="b" v-model="b">
                <div>
                    <button type="button" @click="cambioOp('suma')">+</button>
                    <button type="button" @click="cambioOp('resta')">-</button>
                    <button type="button" @click="cambioOp('multiplicacion')">x</button>
                    <button type="button" @click="cambioOp('division')">/</button>
                    <button type="button" @click="igual()">=</button>
                </div>
                <p>
                    Resultado: <b id="resultado">{{resultado}}</b>
                </p>
            </form>
        </div>
    `
})