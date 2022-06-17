const API   = 'https://crudcrud.com/api/e7c3cd91db904a598c053d755fdb8677'
const RAND_SIZE = 1000000000

const Home          = { template: '<div>Bienvenidos a la tienda</div>' }
const ComprasState  = ComprasComp
const ProductosState = ProductosComp
const UsuariosState  = UsuariosComp

const routes = [
  { path: '/', component: Home },
  { path: '/compras', component: ComprasState },
  { path: '/productos', component: ProductosState },
  { path: '/usuarios', component: UsuariosState }
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