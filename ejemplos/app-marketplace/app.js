const app = new Vue({
    el: '#app',
    data: {
        appNumber: 0
    },
    methods: {
        changeApp: function (appNumber){
            this.appNumber = appNumber 
        }
    }
})