import Vue from 'vue'
import App from './App.vue'

Vue.use(require('vue-moment'))

Vue.filter("toCurrency",  amount => "£" + Number(amount).toLocaleString())

new Vue({
    el: '#app',
    render: h => h(App)
})