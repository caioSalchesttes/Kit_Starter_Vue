import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import './assets/css/app.min.css'

import "bootstrap"

import * as slimscroll from "./assets/libs/simplebar/simplebar.min.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
