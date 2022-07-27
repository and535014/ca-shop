import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavComp from './components/NavComp'

const app = createApp(App)
app.use(store).use(router)

app.component('NavComp', NavComp)

app.mount('#app')
