const API = 'https://crudcrud.com/api/9527cb59bca649bdb9ef7fceab2304fc'

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
            console.log("Item ::", this.item)
            // t=i + 1
            const url = API + '/almacen'
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
            const url = API + '/almacen'
            axios.get(url).then( response => {
                this.items      = response.data // Array de elementos de la API
                this.subtotal   = calcSubtotal(this.items) // Le paso el array de items
                this.total      = calcTotal(this.subtotal, IVA)
            }).catch( error => {
                console.log("error :: ", error)
            })
        },
        eliminarItem: function (_id){ 
            const url = API + '/almacen/' + _id
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
    }
})