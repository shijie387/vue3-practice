import { createApp } from 'vue'

import App from './App.vue'
import router from '../../demo14-router/src/routers/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
