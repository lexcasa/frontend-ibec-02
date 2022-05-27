const API   = 'https://crudcrud.com/api/008443366a4c4c3fbba2ec10ae2a8133'
const model = '/productos'

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
    todos: function (cb){
        const url = API + model
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
        const url = API + model
        axios.post(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    eliminar: function (id, cb){
        const url = API + model + '/' + id
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
        const url = API + model + '/' + id
        axios.put(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
}