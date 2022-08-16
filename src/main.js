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
import MaskCover from './components/MaskCover'
import JsReact from './components/JsReact'
import ModalComp from './components/ModalComp'
import ProductsList from './components/ProductsList'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

const app = createApp(App)
app.use(store).use(router)

app.component('NavComp', NavComp)
app.component('CardContainer', CardContainer)
app.component('FooterComp', FooterComp)
app.component('PhotoZoom', PhotoZoom)
app.component('ShopCart', ShopCart)
app.component('MaskCover', MaskCover)
app.component('JsReact', JsReact)
app.component('ModalComp', ModalComp)
app.component('ProductsList', ProductsList)

app.mount('#app')
