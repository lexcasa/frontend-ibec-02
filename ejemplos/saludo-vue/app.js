const app = new Vue({
    el: '#app',
    data: {
        saludo: null,
        nombre: null
    },
    methods: {
        obtengoSaludo: function (){
            const hola = "Hola, "
            this.saludo = hola + this.nombre
            // En seguida del saludo
            this.nombre = null
        },
        restablecer: function (){
            this.saludo = null
        }
    }
})