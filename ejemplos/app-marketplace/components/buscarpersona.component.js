const BuscarPersona = Vue.component('buscar-persona-component', {
    data: function () {
        return {
            apellido: null,
            persona: null,
            personas: [
                {
                    nombre: "alex",
                    apellido: "casadevall",
                    edad: 30
                },
                {
                    nombre: "juan",
                    apellido: "correa",
                    edad: 19
                },
            ]
        }
    },
    methods: {
        buscarPersona: function (){
            this.personas.map( item => {
                if(item.apellido == this.apellido){
                    this.persona    = item
                    this.apellido   = null
                }
            })
        }
    },
    template: `
        <div id="buscar-persona-component">
            <input type="text" v-model="apellido">
            <button @click="buscarPersona()">Buscar</button>
            <hr>
            <p v-if="persona">
                {{persona.nombre}} - {{persona.edad}}
            </p>
        </div>
    `
})