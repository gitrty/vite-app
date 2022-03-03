import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from './plugin/elementPlus'
import common from './common'

const app = createApp(App)
app
    .use(router)
    .use(store)
    .use(elementPlus)
    .use(common)
    .mount('#app')
