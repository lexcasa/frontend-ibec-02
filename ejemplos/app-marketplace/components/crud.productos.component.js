const IVA = 1.22
const calcSubtotal = function (arr){
    // array: {item, precio}
    let subtotal = 0
    arr.map( item => {
        subtotal += parseFloat(item.precio)
    })
    return subtotal
}
const calcTotal = function (subtotal, imp){
    let total = subtotal * imp
    return total
}

const Productos = {
    API: 'https://crudcrud.com/api/1bf00a0b1b064744a9aeca6e897dd850',
    model: '/productos',
    todos: function (cb){
        const url = this.API + this.model
        axios.get(url).then( response => {
            // Me devuelve una funcion que tiene un array
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    crear: function (obj, cb){
        const url = this.API + this.model
        axios.post(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    eliminar: function (id, cb){
        const url = this.API + this.model + '/' + id
        axios.delete(url).then( response => {
            // Me devuelve una funcion que tiene un array
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    editar: function (id, obj, cb){
        const url = this.API + this.model + '/' + id
        axios.put(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
}
const CrudProductos = Vue.component('crud-productos-component', {
    data: function (){
        return {
            item: '',
            precio: 0,
            items: [],
            subtotal: 0,
            total: 0
        }
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
    },
    template: `
        <div id="crud-productos-component">
            <input type="text" v-model="item" placeholder="Nombre del producto">
            <input type="number" v-model="precio">
            <button @click="guardarItem()">Agregar</button>
            <hr>
            <ul>
                <li v-for="(itm, index) in items" :key="index">
                    <span>#{{index}} {{itm.item}} $ {{itm.precio}}</span>
                    <button @click="eliminarItem(itm._id)">Eliminar</button>
                </li>
            </ul>
        </div>
    `
})