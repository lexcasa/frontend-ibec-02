const ToDoListAlmacen = Vue.component('todolist-almacen-component', {
    data: function () {
        return {
            API: 'https://crudcrud.com/api/1bf00a0b1b064744a9aeca6e897dd850',
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
            console.log("Item ::", this.item)
            // t=i + 1
            const url = this.API + '/almacen'
            // t=i + 2
            axios.post(url, {item: this.item, precio: this.precio}).then( response => {
                // t = i + 2 + z 
                console.log("sucess :: ", response)
                this.item = ''
                // Puedo llamar cargaItems?
                this.cargaItems()
            }).catch( error => {
                console.log("error :: ", error)
            })
        },
        cargaItems: function (){ 
            const url = this.API + '/almacen'
            axios.get(url).then( response => {
                this.items      = response.data // Array de elementos de la this.API
                this.subtotal   = calcSubtotal(this.items) // Le paso el array de items
                this.total      = calcTotal(this.subtotal, IVA)
            }).catch( error => {
                console.log("error :: ", error)
            })
        },
        eliminarItem: function (_id){ 
            const url = this.API + '/almacen/' + _id
            axios.delete(url).then( response => {
                console.log("success :: ", response)
                this.cargaItems()
            }).catch( error => {
                console.log("error :: ", error)
            })
        }
    },
    mounted: function (){
        console.log("app ready :: ")
        this.cargaItems()
    },
    template: `
        <div id="todolist-almacen-component">
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
            <hr>
            <p>Subtotal: $ {{subtotal}}</p>
            <p>Total: $ {{total}}</p>
        </div>
    `
})