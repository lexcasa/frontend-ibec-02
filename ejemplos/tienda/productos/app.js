const API   = 'https://crudcrud.com/api/4bca551ed109407fbac15f297b3b7cae'
const RAND_SIZE = 1000000000
const app = new Vue({
    el: '#app',
    data: {
        productos: [],
        form: {
            _id: null, 
            nombre: null,
            categoria: null,
            codigo: null
        }
    },
    methods: {
        initForm: function (){
            this.form = {
                _id: null, 
                nombre: null,
                categoria: null,
                codigo: null
            }
        },
        obtenerTodos: function (){
            Productos.todos( res => {
                this.productos = res
                this.initForm()
            })
        },
        guardar: function (){
            // Crear producto
            if(this.form._id === null){
                const form = {...this.form}
                delete form._id
                Productos.crear(form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            } else {
                const form = {...this.form}
                delete form._id
                Productos.editar(this.form._id, form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            }
        },
        eliminar: function (id){
            Productos.eliminar(id, res => {
                console.log(res)
                this.obtenerTodos()
            })
        },
        editar: function (producto){
            this.form = {...producto}
        },
        generarCodigo: function (){
            const str   = "abcdefghi"
            const code  = Math.floor(Math.random() * RAND_SIZE)
            let dynCode = ""
            for (let i = 0; i < str.length; i++){
                dynCode += str[Math.floor(Math.random() * str.length)]
            }
            dynCode = dynCode + code
            this.form.codigo = dynCode.toUpperCase()
        }
    },
    mounted: function (){
        this.obtenerTodos()
    }
})