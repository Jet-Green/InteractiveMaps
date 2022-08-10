import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import vuetify from './plugins/vuetify'

import router from './plugins/router'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
