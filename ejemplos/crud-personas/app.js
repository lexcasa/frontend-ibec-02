// API + /todolist
const app = new Vue({
    el: "#app",
    data: {
        persona: {},
        items: []
    },
    methods: {
        // t=i
        guardarItem: function (){
            Productos.crear(this.persona, response => {
                if(!response.error){
                    this.item = ''
                    this.cargaItems()
                }
            })
        },
        cargaItems: function (){ 
            Productos.todos( response => {
                if(!response.error){
                    this.items = response
                    this.persona = {}
                }
                console.log("response :: ", response)
            })
        },
        eliminarItem: function (_id){ 
            Productos.eliminar(_id, response => {
                if(!response.error){
                    this.cargaItems()
                }
            })
        }
    },
    mounted: function (){
        console.log("app ready :: ")
        this.cargaItems()
    }
})