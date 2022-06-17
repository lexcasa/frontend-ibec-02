const API   = 'https://crudcrud.com/api/4bca551ed109407fbac15f297b3b7cae'
const RAND_SIZE = 1000000000
const app = new Vue({
    el: '#app',
    data: {
        usuarios: [],
        form: {
            _id: null, 
            nombre: null,
            tipo: 'final',
            documento: null
        }
    },
    methods: {
        initForm: function (){
            this.form = {
                _id: null, 
                nombre: null,
                tipo: 'final',
                documento: null
            }
        },
        obtenerTodos: function (){
            Usuarios.todos( res => {
                this.usuarios = res
                this.initForm()
            })
        },
        guardar: function (){
            // Crear producto
            if(this.form._id === null){
                const form = {...this.form}
                delete form._id
                Usuarios.crear(form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            } else {
                const form = {...this.form}
                delete form._id
                Usuarios.editar(this.form._id, form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            }
        },
        eliminar: function (id){
            Usuarios.eliminar(id, res => {
                console.log(res)
                this.obtenerTodos()
            })
        },
        editar: function (usuario){
            this.form = {...usuario}
        }
    },
    mounted: function (){
        this.obtenerTodos()
    }
})