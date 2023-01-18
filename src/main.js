import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import App from './App.vue'
// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'



const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')