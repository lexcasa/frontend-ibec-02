const Menu = Vue.component('menu-component', {
    data: function (){
        return {
            apps: [
                {
                    name: "Calculadora",
                    app: 0
                },
                {
                    name: "ToDo List",
                    app: 1
                },
                {
                    name: "Crud Productos",
                    app: 2
                }
            ]
        }
    },
    methods: {
        changeAppTrigger: function (appNumber){
            // app: hace referencia a la app de Vue
            app.changeApp(appNumber)
        }
    },
    template: `
        <ul id="menu-component">
            <li v-for="item in apps">
                <a href="#" @click="changeAppTrigger(item.app)">{{item.name}}</a>
            </li>
        </ul>
    `
})