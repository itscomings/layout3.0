import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()
const vuetify = createVuetify()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
