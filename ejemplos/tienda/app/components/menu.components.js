const Menu = Vue.component('menu-component', {
    data: function (){
        return {
            items: [
                {
                    path: '/',
                    name: 'Home'
                },
                {
                    path: '/usuarios',
                    name: 'Usuarios'
                },
                {
                    path: '/productos',
                    name: 'Productos'
                },
                {
                    path: '/compras',
                    name: 'Compras'
                }
            ]
        }
    }, 
    template: `
        <div id="menu--component">
            <router-link v-for="(item,i) in items" :key="i" v-bind:to="item.path">{{item.name}}</router-link>
        </div>
    `
})