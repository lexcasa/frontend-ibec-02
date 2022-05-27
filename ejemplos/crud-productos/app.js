// API + /todolist
const app = new Vue({
    el: "#app",
    data: {
        item: '',
        precio: 0,
        items: [],
        subtotal: 0,
        total: 0
    },
    methods: {
        // t=i
        guardarItem: function (){
            Productos.crear({item: this.item, precio: this.precio}, response => {
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