const API = 'https://crudcrud.com/api/4f9073b3b46f443589846d7cdb6cfa7e'
// API + /todolist
const app = new Vue({
    el: "#app",
    data: {
        item: '',
        items: [],
        _id: undefined,
        completar: false
    },
    methods: {
        restartItems: function (){
            this.item = ''
            this._id  = undefined
            this.completar = false
        },
        // t=i
        guardarItem: function (){
            console.log("Item ::", this.item)
            // t=i + 1
            const url = API + '/todolist'
            // POST -> API + /todolist
            // { item: this.item }
            // axios    -> Libreria
            // .post    -> Metodo
            // , {obj}  -> Payload (lo que queremos enviar)
            // .then    -> Recibo respuesta OK del servidor
            // .catch   -> Recibo respuesta ERROR del servidor

            // Si viene una ID seria un PUT
            if(this._id){
                // API + /todolist/ + _id
                axios.put(url + '/' + this._id, {item: this.item, completar: this.completar}).then( response => {
                    // t = i + 2 + z 
                    console.log("sucess :: ", response)
                    this.restartItems()
                    // Puedo llamar cargaItems?
                    this.cargaItems()
                    
                }).catch( error => {
                    console.log("error :: ", error)

                    this.restartItems()
                })
            } else {
                // t=i + 2
                axios.post(url, {item: this.item, completar: false}).then( response => {
                    // t = i + 2 + z 
                    console.log("sucess :: ", response)
                    this.restartItems()
                    // Puedo llamar cargaItems?
                    this.cargaItems()
                }).catch( error => {
                    console.log("error :: ", error)
                })
            }
            // 
        },
        cargaItems: function (){ 
            const url = API + '/todolist'
            axios.get(url).then( response => {
                this.items = response.data // Array de elementos de la API
            }).catch( error => {
                console.log("error :: ", error)
            })
        },
        eliminarItem: function (_id){ 
            const url = API + '/todolist/' + _id
            axios.delete(url).then( response => {
                console.log("success :: ", response)
                this.cargaItems()
            }).catch( error => {
                console.log("error :: ", error)
            })
        },
        editarItem: function (itm){
            this.item = itm.item
            this._id  = itm._id
            this.completar = itm.completar
        },
        completarItem: function (indice, _id){
            this.items[indice].completar = true
            let item = this.items[indice].item

            const url = API + '/todolist'
            // Sintaxis: 
            // 
            axios.put(url + '/' + _id, {item: item, completar: true}).then( response => {
                // t = i + 2 + z 
                console.log("sucess :: ", response)
                this.restartItems()
                // Puedo llamar cargaItems?
                this.cargaItems()
                
            }).catch( error => {
                console.log("error :: ", error)
                this.restartItems()
            })

            console.log("completarItem: ", this.items)
        },
    },
    mounted: function (){
        console.log("app ready :: ")
        this.cargaItems()
    }
})