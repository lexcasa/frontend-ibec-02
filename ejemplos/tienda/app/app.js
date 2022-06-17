const API   = 'https://crudcrud.com/api/4bca551ed109407fbac15f297b3b7cae'
const RAND_SIZE = 1000000000

const Home          = { template: '<div>Bienvenidos a la tienda</div>' }
const ComprasState  = ComprasComp
const ProductosState = ProductosComp

const routes = [
  { path: '/', component: Home },
  { path: '/compras', component: ComprasState },
  { path: '/productos', component: ProductosState }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router,
  data: {
    mensaje: "Tienda"
  }
}).$mount('#app')