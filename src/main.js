import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

window.axios = require('axios');
window._api= 'http://192.168.30.135:8080/api';


Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCaDqguUKqZrEa7m5JEbzcZIpWmAcCl6Pg',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
