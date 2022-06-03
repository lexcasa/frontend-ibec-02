const calcEdad = function (fechaNacimiento){
    // El input va a ser de este tipo: YYYY-MM-DD
    let fechaHoy     = (new Date()).toISOString() // YYYY-MM-DDTHH:mm:ss.mmz
    let edad         = 0
    
    if(fechaNacimiento){
        // mesHoy, yearHoy
        let yearHoy = parseInt( fechaHoy.split('-')[0] )
        let mesHoy  = parseInt( fechaHoy.split('-')[1] )

        // Hacemos lo mismo con fechaNacimiento
        let yearNacimiento = parseInt( fechaNacimiento.split('-')[0] )
        let mesNacimiento  = parseInt( fechaNacimiento.split('-')[1] )

        console.log("HOY: ", yearHoy, mesHoy)
        console.log("Nacimiento: ", yearNacimiento, mesNacimiento)

        edad        = yearHoy - yearNacimiento
        let diffMes = mesHoy - mesNacimiento
        
        if(diffMes < 0){
            edad = edad - 1
        }
    }
    return edad
}
const MAYOR_EDAD = 19
const MayorEdad = Vue.component('mayor-edad-component', {
    data: function (){
        return {
            fechaNacimiento: null
        }
    },
    methods: {
        esMayorEdad: function (){
            console.log(this.fechaNacimiento)
            if(calcEdad(this.fechaNacimiento) >= MAYOR_EDAD){
                alert("Puede ingresar")
            } else {
                alert("No puede ingresar")
            }
        }
    },
    template: `
        <div id="mayor-edad-component">
            <input type="date" v-model="fechaNacimiento">
            <hr>
            <button @click="esMayorEdad()">Calcular edad</button>
        </div>
    `
})