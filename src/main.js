import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavComp from './components/NavComp'
import CardContainer from './components/CardContainer'
import FooterComp from './components/FooterComp'

const app = createApp(App)
app.use(store).use(router)

app.component('NavComp', NavComp)
app.component('CardContainer', CardContainer)
app.component('FooterComp', FooterComp)

app.mount('#app')
