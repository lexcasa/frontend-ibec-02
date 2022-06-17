const API   = 'https://crudcrud.com/api/4bca551ed109407fbac15f297b3b7cae'
const RAND_SIZE = 1000000000
const app = new Vue({
    el: '#app',
    data: {
        compras: [],
        usuarios: [],
        productos: [],
        form: {
            _id: null, 
            producto: null,
            usuario: null,
            cantidad: 0,
            precio: 0
        },
        total: 0
    },
    methods: {
        initForm: function (){
            this.form = {
                _id: null, 
                producto: null,
                usuario: null,
                cantidad: 0,
                precio: 0
            }
        },
        obtenerTodos: function (){
            // Listado de compras
            Compras.todos( res => {
                this.compras = res
                this.initForm()
                this.totalizar()
            })

            // Listado de productos
            Productos.todos( res => {
                this.productos = res
            })

            // Listado de usuarios
            Usuarios.todos( res => {
                this.usuarios = res
            })
        },
        guardar: function (){
            // Crear compra
            if(this.form._id === null){
                const form = {...this.form}
                delete form._id
                Compras.crear(form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            } else {
                const form = {...this.form}
                delete form._id
                Compras.editar(this.form._id, form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            }
        },
        eliminar: function (id){
            Compras.eliminar(id, res => {
                console.log(res)
                this.obtenerTodos()
            })
        },
        editar: function (compra){
            this.form = {...compra}
        },
        totalizar: function (){
            let total = 0
            this.compras.map( compra => {
                total += parseInt(compra.cantidad) * parseFloat(compra.precio)
            })
            this.total = total
        }
    },
    mounted: function (){
        this.obtenerTodos()
    }
})