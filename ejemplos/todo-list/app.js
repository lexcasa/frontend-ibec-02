let ind = 0
const app = new Vue({
    el: '#app',
    data: {
        item: null,
        lista: [],
        id: null
    },
    methods: {
        agregarItem: function (){
            // Agrego el item dentro de la lista
            // Buscar si this.indice existe
            // Si existe buscar el elemento en la lista
            // Remplazar el elemento.item por el this.item
            // Caso contrario
            // Funcionamiento normal
            if(this.item){
                
                let find = false
                let pos  = -1

                // Buscar dentro de la lista 
                this.lista.map( (elemento, ind) => {
                    if(elemento.id === this.id){
                        find = true
                        pos  = ind
                    }
                })

                console.log("agregar item edit: ", find, pos)

                if(find){
                    this.lista[pos].item = this.item
                    this.id = null
                } else {
                    ind++
                    this.lista.push(
                        {
                            item: this.item,
                            id: ind,
                            completado: false
                        }
                    )
                }
                this.item = null
            }
            console.log("agregarItem: ", this.lista)
        },
        eliminarItem: function (indice){
            this.lista.splice(indice, 1)
            console.log("eliminarItem: ", this.lista)
        },
        completarItem: function (indice){
            this.lista[indice].completado = true

            console.log("completarItem: ", this.lista)
        },
        editarItem: function (indice){
            this.item = this.lista[indice].item
            this.id = this.lista[indice].id

            console.log(this.item, this.indice)
        }
    }
})