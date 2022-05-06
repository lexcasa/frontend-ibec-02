const personas = [
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
const app = new Vue({
    el: '#app',
    data: {
        apellido: null,
        persona: null
    },
    methods: {
        buscarPersona: function (){
            personas.map( item => {
                if(item.apellido == this.apellido){
                    this.persona    = item
                    this.apellido   = null
                }
            })
        }
    }
})