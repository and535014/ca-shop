import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavComp from './components/NavComp'
import CardContainer from './components/CardContainer'
import FooterComp from './components/FooterComp'
import PhotoZoom from './components/PhotoZoom'
import ShopCart from './components/ShopCart'

const app = createApp(App)
app.use(store).use(router)

app.component('NavComp', NavComp)
app.component('CardContainer', CardContainer)
app.component('FooterComp', FooterComp)
app.component('PhotoZoom', PhotoZoom)
app.component('ShopCart', ShopCart)

app.mount('#app')
