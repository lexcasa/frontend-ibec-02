const UsuariosComp = Vue.component('usuarios-component', {
    data: function () {
        return {
            usuarios: [],
            form: {
                _id: null, 
                nombre: null,
                tipo: 'final',
                documento: null
            }
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
    },
    template: `
    <div id="usuarios--component">
        <div id="usuarios--listado">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(usuario, i) in usuarios" :key="i">
                        <td>{{usuario._id}}</td>
                        <td>{{usuario.nombre}}</td>
                        <td>{{usuario.tipo}}</td>
                        <td>
                            <button @click="editar(usuario)">Editar</button>
                            <button @click="eliminar(usuario._id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
        <div id="usuarios--form">
            <form action="">
                <input type="text" placeholder="Nombre" v-model="form.nombre">
                <br>
                <select name="" v-model="form.tipo">
                    <option value="final">Final</option>
                    <option value="empresa">Empresa</option>
                </select>
                <br>
                <input type="text" placeholder="Documento" v-model="form.documento">
                <br>
                
                <br>
                <button type="button" @click="guardar()">Guardar</button>
            </form>
        </div>
    </div>
    `
})