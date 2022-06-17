const ComprasComp = Vue.component('compras-component', {
    data: function () {
        return {
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
        }
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
    },
    template: `
        <div id="compras--component">
            <div id="compras--listado">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Usuario</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(compra, i) in compras" :key="i">
                            <td>{{compra._id}}</td>
                            <td>{{compra.producto.nombre}}</td>
                            <td>{{compra.usuario.nombre}}</td>
                            <td>{{compra.cantidad}}</td>
                            <td>{{compra.precio}}</td>
                            <td>
                                <button @click="editar(compra)">Editar</button>
                                <button @click="eliminar(compra._id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">Total: </td>
                            <td>{{total}}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <hr>
            <div id="compras--form">
                <form action="">
                    <select v-model="form.producto">
                        <option value="" disabled selected>Elegir un producto</option>
                        <option v-bind:value="producto" v-for="producto in productos">
                            {{producto.nombre}}
                        </option>
                    </select>
                    <br>
                    <select v-model="form.usuario">
                        <option value="" disabled selected>Elegir un usuario</option>
                        <option v-bind:value="usuario" v-for="usuario in usuarios">
                            {{usuario.nombre}}
                        </option>
                    </select>
                    <!-- <input type="text" placeholder="Producto" v-model="form.producto">
                    <br>
                    <input type="text" placeholder="Usuario" v-model="form.usuario"> -->
                    <br>
                    <input type="number" placeholder="Cantidad" v-model="form.cantidad">
                    <br>
                    <input type="number" placeholder="Precio" v-model="form.precio">
                    <br>
                    <button type="button" @click="guardar()">Guardar</button>
                </form>
            </div>
        </div>
    `
})