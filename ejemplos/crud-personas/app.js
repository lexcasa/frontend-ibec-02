// API + /todolist
const app = new Vue({
    el: "#app",
    data: {
        persona: {},
        items: []
    },
    methods: {
        restablecer: function (){
            this.persona = {}
        },
        // t=i
        guardarItem: function (){
            if(!this.persona._id){
                Productos.crear(this.persona, response => {
                    if(!response.error){
                        this.cargaItems()
                    }
                })
            } else {
                // Si me llega la _id edito
                let id      = this.persona._id
                let persona = {...this.persona}
                delete persona._id

                Productos.editar(id, persona, response => {
                    if(!response.error){
                        this.cargaItems()
                    }
                })
            }
            
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
        },
        editarItem: function (obj){
            // ... spred
            // copiar las propiedades y los valores del objeto
            // a un objeto nuevo quitando la referencia
            this.persona = {...obj}
        }
    },
    mounted: function (){
        console.log("app ready :: ")
        this.cargaItems()
    }
})