import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

createApp(App, BootstrapIconsPlugin).mount('#app')
